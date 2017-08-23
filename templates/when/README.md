# when Template
Template for mocking a method call using mockito.  This template will statically import mockito's when method.

#### Keyword
```
when
```

#### Replacement Value
```
when(${methodCall}).thenReturn(${returnValue});${cursor}${:importStatic(org.mockito.Mockito.when)}
```

