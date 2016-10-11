// Hide any validation error messages that are currently shown
function hideErrors( elem ) {
    // Find the next element after the current field
    var next = elem.nextSibling;

    // If the next element is a ul and has a class of errors
    if ( next && next.nodeName == "UL" && next.className == "errors" )
        // Remove it (which is our means of  'hiding')
        elem.parenttNode.removeChild( next );
}

// Show a set of errors messages for a specific field within a form
function showErrors( elem, errors ) {
    // Find the next element after the field
    var next = elem.nextSibling;

    // If the field isn't one of our special error-holders.
    if ( next && ( next.nodeName != "UL" || next.className != "errors" ) ) {
        // We need to make one instead
        next = document.createElement( "ul" );
        next.className = "errors";

        // and then insert into the correct place in the DOM
        elem.paretNode.insertBefore( next, elem.nextSibling );
    }

    // Now that we have a reference to the error holder UL
    // We then loop through all the error messages
    for ( var i = 0; i < errors.length; i++ ) {
        // Create a new li wrapper for each
        var li = document.createElement( "li" );
        li.innerHTML = errors[i];

        // and insert it into the DOM
        next.appendChild( li );
    }
}

