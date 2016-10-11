// Set an opacity level for an element
// (where level is a number 0-100)
function setOpacity( elem, level ) {
    // If filters exist, then this is IE, so set the Alpha filter
    if ( elem.filters )
        elem.filters.alpha.opacity = level;

    // Otherwise use the W3C opacity property
    else
        elem.style.opacity = level / 100;
}

