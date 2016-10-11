// Serialize a set of data. It can take two different types of objects:
//  - An array of input elements.
//  - A hash of key/value pairs
// The function returns a serialized string
function serialize(a) {
    // The set of serialize results
    var s = [];
		
    // If an array was passed in, assume that it is an array
    // of form elements
    if ( a.constructor == Array ) {

        // Serialize the form elements
        for ( var i = 0; i < a.length; i++ )
            s.push( a[i].name + "=" + encodeURIComponent( a[i].value ) );
			
    // Otherwise, assume that it's an object of key/value pairs
    } else {

        // Serialize the key/values
        for ( var j in a )
            s.push( j + "=" + encodeURIComponent( a[j] ) );

    }
		
    // Return the resulting serialization
    return s.join("&");
}

