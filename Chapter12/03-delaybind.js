// Initialize the delayed input checks on our input
delayedInput({
    // We're attaching to the input text field
    elem: id("q"),
        
    // We're going to start searching after only 1 character of input
    chars: 1,

    // When the text field loses focus, close the results popup
    focus: true,
        
    // Handle when the result popup should be opened up
    open: function(q,open){
        // Get the last word out of the comma-separated list of words
        var w = trim( q.substr( q.lastIndexOf(',')+1, q.length ) );

        // Make sure that we're dealing with a word, at least
        if ( w ) {
            // Show the loading spinner animation
            show( id("qloading") );

            // Load and process the results from the server
        }
    },

    // When the popup needs to be closed
    close: function(){
        // Hide the result set
        hide( id("results") );
    }
});

