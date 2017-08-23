# build Template
Creates the build method for the current builder.  This assumes that the builder implementation is contained within the java type that it builds. 

#### Keyword
```
build
```

#### Replacement Value
```
public ${primary_type_name} build()
{
	return new ${primary_type_name}(this);
}
```

