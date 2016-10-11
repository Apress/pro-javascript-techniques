// A generic function for checking to see if an input element has
// a date entered into it
function checkDate( elem ) {
    // Make sure that something is entered, and that it
    // looks like a valid MM/DD/YYYY date
    return !elem.value || /^\d{2}\/\d{2}\/\d{2,4}$/.test(obj.value);
}

// Get an input element to check
var elem = document.getElementById("date");

// Check to see if the field contains a valid date
if ( ! checkDate( elem ) ) {
    alert( "Field is not a date." );
}

