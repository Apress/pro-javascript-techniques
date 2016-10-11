// A function for validating all fields within a form.
// The form argument should be a reference to a form element
// The load argument should be a boolean referring to the fact that
// the validation function is being run on page load, versus dynamically
function validateForm( form, load ) {
    var valid = true;

    // Go through all the field elements in form
    // form.elements is an array of all fields in a form
    for ( var i = 0; i < form.elements.length; i++ ) {

        // Hide any error messages, if they're being shown
        hideErrors( form.elements[i] );

        // Check to see if the field contains valid contents, or not
        if ( ! validateField( form.elements[i], load ) )
            valid = false;

    }

    // Return false if a field does not have valid contents
    // true if all fields are valid
    return valid;
}

// Validate a single field's contents
function validateField( elem, load ) {
    var errors = [];

    // Go through all the possible validation techniques
    for ( var name in errMsg ) {
        // See if the field has the class specified by the error type
        var re = new RegExp("(^|\\s)" + name + "(\\s|$)");

        // Check to see if  the element has the class and that it passes the
        // validatino test
        if ( re.test( elem.className ) && !errMsg[name].test( elem, load ) )
            // If it fails the validation, add the error message to list
            errors.push( errMsg[name].msg );
    }

    // Show the error messages, if they exist
    if ( errors.length )
        showErrors( elem, errors );

    // Return false if the field fails any of the validation routines
    return errors.length > 0;
}

