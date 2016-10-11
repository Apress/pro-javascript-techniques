// Strictly check a list of variable types against a list of arguments
function strict( types, args ) {

    // Make sure that the number of types and args matches
    if (  types.length != args.length ) {
        // If they do not, throw a useful exception
        throw "Invalid number of arguments. Expected " + types.length +
            ", received " + args.length + " instead.";
    }

    // Go through each of the arguments and check their types
    for ( var i = 0; i < args.length; i++ ) {
        // 
        if ( args[i].constructor != types[i] ) {
            throw "Invalid argument type. Expected " + types[i].name +
                ", received " + args[i].constructor.name + " instead.";
        }
    }
}

// A simple function for printing out a list of users
function userList( prefix, num, users ) {
    // Make sure that the prefix is a string, num is a number,
    // and users is an array
    strict( [ String, Number, Array ], arguments );

    // Iterate up to 'num' users
    for ( var i = 0; i < num; i++ ) {
        // Displaying a message about each user
        alert( prefix + ": " + users[i] );
    }
}

