# iseTest Template
Creates a test case for junit 4 which expects an IllegalStateException to be thrown. This template uses underscore naming conventions for tests. iseTest stands for 'Illegal State Exception Test'.

#### Keyword
```
iseTest
```

#### Replacement Value
```
@Test(expected = IllegalStateException.class) ${:import(org.junit.Test)}
        public void test${methodName}_${scenario}_throwsException()
        {
        ${cursor}
        }
```

