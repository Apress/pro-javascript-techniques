// A generic function for checking to see if an input element has
// had information entered into it
function checkRequired( elem ) {
    if ( elem.type == "checkbox" || elem.type == "radio" )
        return getInputsByName( elem.name ).numChecked;
    else
        return elem.value || elem.value == elem.defaultValue;
}

// Find all input elements that have a specified name (good for finding
// and dealing with checkboxes or radio buttons)
function getInputsByName( name ) {
    // The array of input elements that will be matched
    var results = [];
    // Keep track of how many of them were checked
    results.numChecked = 0;

    // Find all the input elements in the document
    var input = document.getElementsByTagName("input");
    for ( var i = 0; i < input.length; i++ ) {
        // Find all the fields that have the specified name
        if ( input[i].name == name ) {
            // Save the result, to be returned later
            results.push( input[i] );

            // Remember how many of the fields were checked
            if ( input[i].checked )
                results.numChecked++;
        }
    }

    // Return the set of matched fields
    return results;
}

// Get an input element to check
var elem = document.getElementById("age");

// Make sure that the required age field has been checked
if ( ! checkRequired( elem ) ) {
    alert( "Required field is empty – you must be over 13 to use this site." );
}

// Get an input element to check
var elem = document.getElementById("name");

// Make sure that some text has been entered into the name field
if ( ! checkRequired( elem ) ) {
    alert( "Required field is empty – please provide your  name." );
}

