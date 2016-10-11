// Create a new Person object constructor
function Person( name ) {
    this.name = name;
}

// Add a new method to the Person object
Person.method( 'getName', function(){
    return name;
});

// Create a new User object constructor
function User( name, password ) {
    this.name = name;
    this.password = password;
},

// Inherit all the methods from the Person object
User.inherits( Person );

// Add a new method to the User object
User.method( 'getPassword', function(){
    return this.password;
});

// Overwrite the method created by the Person object,
// but call it again using the uber function
User.method( 'getName', function(){
    return "My name is: " + this.uber('getName');
});

