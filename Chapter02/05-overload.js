// A simple function for sending a message
function sendMessage( msg, obj ) {
    // If both a message and an object are provided
    if ( arguments.length == 2 )
        // Send the message to the object
        obj.alert( msg );

    // Otherwise, assume that only a message was provided
    else
        // So just display the default error message
        alert( msg );
}

// Both of these function calls work
sendMessage( "Hello, World!" );
sendMessage( "How are you?", window );

// A function that takes any number of arguments and makes
// an array out of them
function makeArray() {
    // The temporary array
    var arr = [];
    
    // Go through each of the submitted arguments
    for ( var i = 0; i < arguments.length; i++ ) {
        arr.push( arguments[i] );
    }

    // Return the resulting array
    return arr;
}

