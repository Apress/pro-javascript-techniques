function domReady( f ) {
    // If the DOM is already loaded, execute the function right away
    if ( domReady.done ) return f();

    // If we’ve already added a function
    if ( domReady.timer ) {
        // Add it to the list of functions to execute
        domReady.ready.push( f  );
    } else {
        // Attach an event for when the page finishes  loading,
        // just in case it finishes first. Uses addEvent.
        addEvent( window, “load”, isDOMReady );

        // Initialize the array of functions to execute
        domReady.ready = [ f ];

        //  Check to see if the DOM is ready as quickly as possible
        domReady.timer = setInterval( isDOMReady, 13 );
    }
}

// Checks to see if the DOM is ready for navigation
function isDOMReady() {
    // If we already figured out that the page is ready, ignore
    if ( domReady.done ) return false;

    // Check to see if a number of functions and elements are
    // able to be accessed
    if ( document && document.getElementsByTagName && 
          document.getElementById && document.body ) {

        // If they’re ready, we can stop checking
        clearInterval( domReady.timer );
        domReady.timer = null;

        // Execute all the functions that were waiting
        for ( var i = 0; i < domReady.ready.length; i++ )
            domReady.ready[i]();

        // Remember that we’re now done
        domReady.ready = null;
        domReady.done = true;
    }
}
