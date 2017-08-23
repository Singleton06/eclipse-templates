const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');
const os = require('os')

const isDirectory = source => fs.lstatSync(source).isDirectory();
const getDirectories = source =>
  fs.readdirSync(source).map(name => path.join(source, name)).filter(isDirectory);

const readTemplateFile = templateFile => {
  const xmlFileContent = fs.readFileSync(templateFile);
  const parser = new xml2js.Parser({attrkey: 'attributes', charkey: 'content'});

  let templateObject;
  parser.parseString(xmlFileContent, (err, result) => {
    templateObject = result.templates.template;
  });

  return templateObject;
};

const processTemplates = templateDirectories => {
  const templates = [];
  templateDirectories.forEach((directory) => {
    let templateXmlFile;
    let templateDemos = [];
    let existingReadme;

    fs.readdirSync(directory).forEach(file => {
      if (file.endsWith('.xml')) {
        templateXmlFile = path.join(directory, file);
      } else if (file.toUpperCase() === 'README.MD') {
        existingReadme = path.join(directory, file);
      } else if (file.endsWith('.gif')) {
        templateDemos.push(file);
      }
    });


    const templatesObject = readTemplateFile(templateXmlFile);
    if (templatesObject.length > 1) {
      throw Error('Only expected 1 template in the directory but found more for directory', directory);
    }

    const templateObject = templatesObject[0];
    templates.push({
      templateName: templateObject.attributes.name,
      directory,
      templateXmlFile,
      templateObject,
      templateDemos,
      existingReadme
    });
  });

  return templates;
};

const getHeader = (headingText, headingLevel) => {
  let heading = '';
  for (let i = 0; i < headingLevel; i++) {
    heading += '#';
  }
  heading += ' ' + headingText + getNewLine();
  return heading;
}

const getCode = (code) => {
  let codeText = '```';
  codeText += getNewLine();
  codeText += code;
  codeText += getNewLine();
  codeText += '```' + getNewLine();

  return codeText
}

const getDemo = (demoFile, demoName) => {
  return `![${demoName}](${demoFile})` + getNewLine(2);
};

const getNewLine = (count = 1) => {
  let newlines = '';
  for (let i = 0; i < count; i++) {
    newlines += os.EOL;
  }
  return newlines;
};

const generateReadmeForAllTemplates = (processedTemplates) => {
  processedTemplates.forEach(template => {
    if (template.existingReadme) {
      fs.unlinkSync(template.existingReadme);
    }

    let readmeFile = getHeader(template.templateName + ' Template', 1);
    readmeFile += template.templateObject.attributes.description + getNewLine(2);

    readmeFile += getHeader('Keyword', 4);
    readmeFile += getCode(template.templateName) + getNewLine();

    readmeFile += getHeader('Replacement Value', 4);
    readmeFile += getCode(template.templateObject.content.trim()) + getNewLine();

    if (template.templateDemos.length > 0) {
      readmeFile += getHeader('Demos', 4);
      template.templateDemos.forEach((demo, index) => {
        readmeFile += getDemo(demo, template.templateName + (index + 1) + ' demo');
      });
    }
    fs.writeFileSync(path.join(template.directory, 'README.md'), readmeFile);
  });
};

const getReadmeTableRow = (template, description) => {
  return `| [${template}](${template}) | ${description} |` + getNewLine();
};

const generateSummaryReadme = (processedTemplates) => {
  if (fs.exists('templates/README.md')) {
    fs.unlinkSync('templates/README.md');
  }

  let generalReadme = getHeader('All Templates', 1) + getNewLine();

  generalReadme += '| Template | Description |' + getNewLine();
  generalReadme += '|----------|----------|' + getNewLine();
  processedTemplates.forEach(template => {
    generalReadme += getReadmeTableRow(template.templateName, template.templateObject.attributes.description);
  });

  fs.writeFileSync('templates/README.md', generalReadme);
};

const templateDirectories = getDirectories('templates');
const processedTemplates = processTemplates(templateDirectories);

generateReadmeForAllTemplates(processedTemplates);
generateSummaryReadme(processedTemplates);
