// Get the X position of the mouse relative to the element target
// used in event object ‘e’
function getElementX( e ) {
    // Find the appropriate element offset
    return ( e && e.layerX ) || window.event.offsetX;
}
 
// Get the Y position of the mouse relative to the element target
// used in event object ‘e’
function getElementY( e ) {
    // Find the appropriate element offset
    return ( e && e.layerY ) || window.event.offsetY;
}

