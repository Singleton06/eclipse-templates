# iaeTest Template
Creates a test case for junit 4 which expects an IllegalArgumentException to be thrown.  This template uses underscore naming conventions for tests. iaeTest stands for 'Illegal Argument Exception Test'.

#### Keyword
```
iaeTest
```

#### Replacement Value
```
@Test(expected = IllegalArgumentException.class) ${:import(org.junit.Test)}
    public void test${methodName}_${scenario}_throwsException()
    {
		${cursor}
    }
```

