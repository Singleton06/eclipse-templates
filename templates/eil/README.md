# eil Template
Template for creating an empty ImmutableList from guava.  Must have guava as a dependency to the project. eil is short for 'Empty Immutable List'.

#### Keyword
```
eil
```

#### Replacement Value
```
${import:import('com.google.common.collect.ImmutableList')}ImmutableList<${type}> ${emptyImmutableList} = ImmutableList.<${type}> of();${cursor}
```

