# All Templates

| Template | Description |
|----------|----------|
| [at](at) | Creates hamcrest assertThat statement to perform assertions in tests.  'at' is short for 'assert that'. |
| [b](b) | In javadoc, surrounds the selected text in strong (bold tags). If no selected text, then just inserts the strong tags with ability to add text in between and then tab out.  'b' is short for 'bold'. |
| [bm](bm) | Creates the builder method implementation.  bm is an abbreviation for builder method. |
| [build](build) | Creates the build method for the current builder.  This assumes that the builder implementation is contained within the java type that it builds.  |
| [code](code) | Javadoc template for creating a code javadoc tag. |
| [const](const) | Template for creating a private static final Java constant field.  Const is short for constant. |
| [eil](eil) | Template for creating an empty ImmutableList from guava.  Must have guava as a dependency to the project. eil is short for 'Empty Immutable List'. |
| [false](false) | Template for javadoccing false.  This template will surround the string 'false' in a code tag so that it is monospaced in javadoc.  |
| [genHashEqDoc](genHashEqDoc) | Generates a non-javadoc comment (which should be placed before the hash code and equals methods) to indicate to future developers that the hash code and equals methods were generated to include all fields.  This is useful if additional fields were added and were not updated in the equals and hashcode, as it helps future developers identify that the new field was omitted by accident.  'genHashEqDoc' stands for 'Generate Hash Code and Equals Documentation'. |
| [iaeTest](iaeTest) | Creates a test case for junit 4 which expects an IllegalArgumentException to be thrown.  This template uses underscore naming conventions for tests. iaeTest stands for 'Illegal Argument Exception Test'. |
| [immutabilityTest](immutabilityTest) | Creates a test which ensures a field of type List on an object is truly immutable (meaning that modifications will not alter original object).  This template assumes that a builder is used to construct the object and a builder instance already in test class state and has had the required values already provided.  This also ensures that the list provided to the builder cannot be modified and affect the resulting built object.   |
| [iseTest](iseTest) | Creates a test case for junit 4 which expects an IllegalStateException to be thrown. This template uses underscore naming conventions for tests. iseTest stands for 'Illegal State Exception Test'. |
| [li](li) | Template for creating a HTML list item in javadoc.  This should be used within either a unordered (ul) or ordered (ol) html tag.  'li' is an abbreviation for 'list item'. |
| [mock](mock) | Used to create a mock variable through the Mockito.mock method call (imports the method statically). |
| [nonnull](nonnull) | Template for creating javadoc to represent a non-null value.  The null will be placed in a code tag since it is a java literal value. |
| [null](null) | Template for javadoccing null value.  The template will surround the string 'null' in a code tag so that it is monospaced in javadoc. |
| [p](p) | Template for creating an open and closing paragraph tags for javadoc.  'p' is an abbreviation for paragraph. |
| [pf](pf) | This is a template for creating a private final variables or classes. 'pf' is an abbreviation for 'private final'. |
| [prefabClass](prefabClass) | Template used to specify prefabricated values for performing equals-verifier tests in situations where equals verifier could not dynamically implement one of the types.  'prefabClass' is an abbreviation for 'Prefabricated Class'. |
| [sup](sup) | Template for suppressing warnings.  It defaults to javadoc, but additional can be added.  'sup' is an abbreviation for 'Suppress Warnings'. |
| [test](test) | Template for creating an empty junit 4 test.  This template will also import hamcrest core matchers as well as junit asserts to make them readily available for testing.  This is done with the * import approach because the intended use case is to have organize imports on during save actions.  If this is not the desired behavior, just remove the imports from the template. |
| [ul](ul) | Template for creating a HTML unordered list in javadoc. 'ul' is an abbreviation for 'unordered list'. |
| [when](when) | Template for mocking a method call using mockito.  This template will statically import mockito's when method. |
