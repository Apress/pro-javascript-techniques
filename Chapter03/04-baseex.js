// Create a new Person class
var Person = Base.extend({
    // The constructor of the Person class
    constructor: function( name ) {
        this.name = name;
    },

    A simple method of the Person class
    getName: function() {
        return this.name;
    }
});

// Create a new  User class that inherits from the Person class
var User = Person.extend({
    // Create the User class constructor
    constructor: function( name, password ) {
        // which, in turn calls the parent classes' constructor method
        this.base( name );
        this.password = password;
    },

    // Create another, simple, method for the User
    getPassword: function() {
        return this.password;
    }
});

