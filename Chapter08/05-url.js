// A generic function for checking to see if an input element has
// a  URL contained in it
function checkURL( elem ) {
    // Make sure that some text was entered, and that it's
    // not the default http:// text
    return !elem.value || elem.value == 'http://' ||
        // Make sure that it looks like a valid URL
        /^https?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/.test( elem.value );
}

// Get an input element to check
var elem = document.getElementById("url");

// Check to see if the field is a valid URL
if ( ! checkURL( elem ) ) {
    alert( "Field does not contain a URL." );
}

