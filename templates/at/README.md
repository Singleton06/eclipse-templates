# at Template
Creates hamcrest assertThat statement to perform assertions in tests.  'at' is short for 'assert that'.

#### Keyword
```
at
```

#### Replacement Value
```
${staticImport:importStatic('org.junit.Assert.*', 'org.hamcrest.CoreMatchers.*')}assertThat(${actual}, is(${expected}));${cursor}
```

