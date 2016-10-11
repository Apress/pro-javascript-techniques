// Wait until the DOM is Ready
domReady(function(){

    // Find all the definition terms
    var dt = tag(“dt”);
    for ( var I = 0; I < dt.length; i++ ) {

        // Watch for a user click on the term
        addEvent( dt[i], “click”, function() {

            // See if the definition is already open, or not
            var open = attr( this, “open” );

            // Toggle the display of the definition
            next( this ).style.display = open ? ‘none’ : ‘block’;

            // Remember if the defnition is open
            attr( this, “open”, open ? ‘’ : ‘yes’ );
        });
    }
});
