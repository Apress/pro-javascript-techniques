// A simple object holding key/value pairs
{
    name: "John",
    last: "Resig",
    city: "Cambridge",
    zip: 02140
}

// Serialized form
name=John&last=Resig&city=Cambridge&zip=02140

// Another set of data, with multiple values
[
    { name: "name", value: "John" },
    { name: "last", value: "Resig" },
    { name: "lang", value: "JavaScript" },
    { name: "lang", value: "Perl" },
    { name: "lang", value: "Java" }
]

// And the serialized form of that data
name=John&last=Resig&lang=JavaScript&lang=Perl&lang=Java

// Finally, lets find some input elements (using the id() method that
// we made in the DOM chapter)
[
    id( "name" ),
    id( "last" ),
    id( "username" ),
    id( "password" )
]

// And serialize them into a data string
name=John&last=Resig&username=jeresig&password=test

