// A function for determining how far horizontally the browser is scrolled
function scrollX() {
    // A shortcut, in case we’re using Internet Explorer 6 in Strict Mode
    var de = document.documentElement;

    // If the pageXOffset of the browser is available, use that
    return self.pageXOffset ||

        // Otherwise, try to get the scroll left off of the root node
        ( de && de.scrollLeft ) ||

        // Finally, try to get the scroll left off of the body element
        document.body.scrollLeft;
}

// A function for determining how far vertically the browser is scrolled
function scrollY() {
    // A shortcut, in case we’re using Internet Explorer 6 in Strict Mode
    var de = document.documentElement;

    // If the pageYOffset of the browser is available, use that
    return self.pageYOffset ||

        // Otherwise, try to get the scroll top off of the root node
        ( de && de.scrollTop ) ||

        // Finally, try to get the scroll top off of the body element
        document.body.scrollTop;
}

