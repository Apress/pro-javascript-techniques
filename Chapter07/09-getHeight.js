// Get the actual height (using the computed CSS) of an element
function getHeight( elem ) {
    // Gets the computed CSS value and parses out a usable number
    return parseInt( getStyle( elem, ‘height’ ) );
}

// Get the actual width (using the computed CSS) of an element
function getWidth( elem ) {
    // Gets the computed CSS value and parses out a usable number
    return parseInt( getStyle( elem, ‘width’ ) );
}

