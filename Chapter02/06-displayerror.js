function displayError( msg ) {
    // Check and make sure that msg is not undefined
    if ( typeof msg == 'undefined' ) {
        // If it is, set a default message
        msg = "An error occurred.";
    }

    // Display the message
    alert( msg );
}

