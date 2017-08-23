# mock Template
Used to create a mock variable through the Mockito.mock method call (imports the method statically).

#### Keyword
```
mock
```

#### Replacement Value
```
${classToMock} mock${classToMock} = mock(${classToMock}.class);${:importStatic(org.mockito.Mockito.mock)}
```

