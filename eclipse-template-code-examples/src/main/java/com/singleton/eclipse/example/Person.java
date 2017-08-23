package com.singleton.eclipse.example;

/**
 * <p>
 * Representation of a Person.
 * </p>
 * 
 * @author Dustin Singleton
 */
@SuppressWarnings({ "javadoc" })
public class Person
{
    private final String firstName;
    private final String lastName;

    public Person(String firstName, String lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getFirstName()
    {
        return firstName;
    }

    public String getLastName()
    {
        return lastName;
    }
}
