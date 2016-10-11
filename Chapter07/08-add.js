// A function for adding a number of pixels to the horizontal
// position of an element 
function addX(elem,pos) {
    // Get the current horz. position and add the offset to it.
    setX( posX(elem) + pos );
}

// A function that can be used to add a number of pixels to the
// vertical position of an element
function addY(elem,pos) {
    // Get the current vertical position and add the offset to it
    setY( posY(elem) + pos );
}

