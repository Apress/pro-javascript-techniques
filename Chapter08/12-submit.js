function watchForm( form ) {
    // Watch the form for submission
    addEvent( form, 'submit',  function(){

        // make sure that the form's contents validate correctly
        return validateForm( form );

    });
}

// Find the first form on the page
var form = document.getElementsByTagName( "form" )[0];

// and watch for when its submitted, to validate it
watchForm( form );

