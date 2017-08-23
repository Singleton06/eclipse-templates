# prefabClass Template
Template used to specify prefabricated values for performing equals-verifier tests in situations where equals verifier could not dynamically implement one of the types.  'prefabClass' is an abbreviation for 'Prefabricated Class'.

#### Keyword
```
prefabClass
```

#### Replacement Value
```
.withPrefabValues(${prefabClass}.class, new ${prefabClass}(${args1}), new ${prefabClass}(${args2}))
${cursor}
```

