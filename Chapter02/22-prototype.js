// Create a new User constructor
function User( name, age ){
    this.name = name;
    this.age = age;
}

// Add a new function to the object prototype
User.prototype.getName = function(){
    return this.name;
};

// And add another function to the prototype
// Notice that the context is going to be within
// the instantiated object
User.prototype.getAge = function(){
    return this.age;
};

// Instantiate a new User object
var user = new User( "Bob", 44 );

// We can see that the two methods we attached are with the
// object, with proper contexts
alert( user.getName() == "Bob" );
alert( user.getAge() == 44 );

