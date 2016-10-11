// Create a new User object constructor
function User( name, age ) {
    // Attempt to figure out the year that the users was born
    var year = (new Date()).getFullYear() – age;

    // Create a new Privileged method that has access to 
    // the year variable, but is still publically available
    this.getYearBorn = function(){
        return year;
    };
}

// Create a new instance of the user object
var user = new User( "Bob", 44 );

// Verify that the year returned is correct
alert( user.getYearBorn() == 1962 );

// And notice that we're not able to access the private year 
// property of the object
alert( user.year == null );

