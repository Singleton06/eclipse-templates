# genHashEqDoc Template
Generates a non-javadoc comment (which should be placed before the hash code and equals methods) to indicate to future developers that the hash code and equals methods were generated to include all fields.  This is useful if additional fields were added and were not updated in the equals and hashcode, as it helps future developers identify that the new field was omitted by accident.  'genHashEqDoc' stands for 'Generate Hash Code and Equals Documentation'.

#### Keyword
```
genHashEqDoc
```

#### Replacement Value
```
/*
     * Generated using eclipse built-in hash-code and equals generator with all fields.
     */
```

