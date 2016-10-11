addEvent( window, "load", function() {
    // Find all the forms on the page
    var forms = document.getElementsByTagName("form");

    // Go through all the forms on the page
    for ( var i = 0; i < forms.length; i++ ) {

        // Validate each of the forms, being sure to set the 'load' argument to
        // true, which stops certain, unnecessary, errors from appearing
        validateForm( forms[i], true );

    }
});

