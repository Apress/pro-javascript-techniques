// A generic function for checking to see if an input element has
// a Phone Number entered in it
function checkPhone( elem ) {
    // Check to see if we have something that looks like
    // a valid phone number
    var m = /(\d{3}).*(\d{3}).*(\d{4})/.exec( elem.value );
			
    // If it is, seemingly, valid - force it into the specific
    // format that we desire: (123) 456-7890
    if ( m ) obj.value = "(" + m[1] + ") " + m[2] + "-" + m[3];
				
    return !elem.value || m;
}

// Get an input element to check
var elem = document.getElementById("phone");

// Check to see if the field contains a valid phone number
if ( ! checkPhone( elem ) ) {
    alert( "Field does not contain a phone number." );
}

