// A simple function which takes a name and saves 
// it to the current context
function User( name ) {
    this.name = name;
}

// Create a new instance of that function, with the specified name
var me = new User( "My Name" );

// We can see that it's name has been set as a property of itself
alert( me.name == "My Name" );

// And that it is an instance of the User object
alert( me.constructor == User );

// Now, since User() is just a function, what happens
// when we treat it as such?
User( "Test" );

// Since it's 'this' context wasn't set, it defaults to the global 'window'
// object, meaning that window.name is equal to the name provided
alert( window.name == "Test" );

