// Find the X (Horizontal, Left) position of an element
function pageX(elem) {
    var p = 0;

    // We need to add up all of the offsets for every parent
    while ( elem.offsetParent ) {
        // Add the offset to the current count
        p += elem.offsetLeft;

        // and continue on to the next parent
        elem = elem.offsetParent;
    }

    return p;
}

// Find the Y (Vertical, Top) position of an element
function pageY(elem) {
    var p = 0;

    // We need to add up all the offsets for every parent
    while ( elem.offsetParent ) {
        // Add the offset to the current count
        p += elem.offsetTop;

        // and continue on to the next parent
        elem = elem.offsetParent;
    }

    return p;
}

