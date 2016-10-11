// Create the constructor for a Person object
function Person( name ) {
    this.name = name;
}

// Add a new method to the Person object
Person.prototype.getName = function() {
    return this.name;
};

// Create a new User object constructor
function User( name, password ) {
    // Notice that this does not support graceful overloading/inheritance
    // e.g. being able to call the super class constructor
    this.name = name;
    this.password = password;
};

// The User object inherits all of the Person object's methods
User.prototype = new Person();

// We add a method of our own to the User object
User.prototype.getPassword = function() {
    return this.password;
};

