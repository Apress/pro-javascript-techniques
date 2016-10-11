// A function for hiding (using display) an element
function hide( elem ) {
    // Find out what it’s current display state is
    var curDisplay = getStyle( elem, ‘display’ );

    //  Remember its display state for later
    if ( curDisplay != ‘none’ )
        elem.$oldDisplay = curDisplay;

    // Set the display to none (hiding the element)
    elem.style.display = ‘none’;
}

// A function for showing (using display) an element
function show( elem ) {
    // Set the display property back to what it use to be, or use
    // ‘block’, if no previous display had been saved
    elem.style.display = elem.$oldDisplay || ‘block’;
}

