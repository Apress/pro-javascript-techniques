// Find the horizontal positioing of an element within its parent
function parentX(elem) {
    // If the offsetParent is the element’s parent, break early
    return elem.parentNode == elem.offsetParent ?
        elem.offsetLeft :

        // Otherwise, we need to find the position relative to the entire
        // page for both elements, and find the difference
        pageX( elem ) - pageX( elem.parentNode );
}

// Find the vertical positioing of an element within its parent
function parentY(elem) {
    // If the offsetParent is the element’s parent, break early
    return elem.parentNode == elem.offsetParent ?
        elem.offsetTop :

        // Otherwise, we need to find the position relative to the entire
        // page for both elements, and find the difference
        pageY( elem ) - pageY( elem.parentNode );
}

