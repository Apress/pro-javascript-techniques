// Find the left position of an element
function posX(elem) {
    // Get the computed style and get the number out of the value
    return parseInt( getStyle( elem, “left” ) );
}

// Find the top position of an element
function posY(elem) {
    // Get the computed style and get the number out of the value
    return parseInt( getStyle( elem, “top” ) );
}

