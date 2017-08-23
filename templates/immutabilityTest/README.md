# immutabilityTest Template
Creates a test which ensures a field of type List on an object is truly immutable (meaning that modifications will not alter original object).  This template assumes that a builder is used to construct the object and a builder instance already in test class state and has had the required values already provided.  This also ensures that the list provided to the builder cannot be modified and affect the resulting built object.  

#### Keyword
```
immutabilityTest
```

#### Replacement Value
```
@Test  
    public void test${testName}_immutabilityEnforced()  
    {  
        List<String> original${listName} = Arrays.asList(${item}, ${item}, ${item});  
        List<String> listToBeModified = new ArrayList<String>(original${listName});  
  
        builder.${methodCall}(listToBeModified);  
        listToBeModified.remove(0);  
  
        ${builderBuildType} ${builtObjectName} = builder.build();  
        assertThat(${builtObjectName}.${getMethodCallName}(), is(original${listName}));  
        assertThat(${builtObjectName}.${getMethodCallName}().size(), is(3));  
         
        ${builtObjectName}.${getMethodCallName}().remove(0);  
        assertThat(${builtObjectName}.${getMethodCallName}(), is(originalNicknames));  
        assertThat(${builtObjectName}.${getMethodCallName}().size(), is(3));  
    }
```

