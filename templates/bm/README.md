# bm Template
Creates the builder method implementation.  bm is an abbreviation for builder method.

#### Keyword
```
bm
```

#### Replacement Value
```
public ${Builder} ${field_name}(${field_type} ${field_name})
{
	this.${field_name} = ${field_name};
	return this;
}

${cursor}
```

