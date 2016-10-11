function watchFields( form ) {
    // Go through all the field elements in form
    for ( var i = 0; i < form.elements.length; i++ ) {

        // and attach a 'blur' event handler (which watches for a user
        // to lose focus of an input element)
        addEvent( form.elements[i], 'blur',  function(){
           // Once the focus has been lost, re-validate the field
           return validateField( this );
        });

    }
}

// Locate the first form on the page
var form = document.getElementsByTagName( "form" )[0];

// Watch all the fields in the form for changes
watchFields( form );

