// Initialize all the variables that we’re going to use
var curDrag, origX, origY;

// Watch for any time that the user clicks down on an element
document.onmousedown = function(e){
    // Normalize the Event object
    e = fixEvent( e );

    // Only drag elements that have a class of ‘draggable’
    if ( e.target.className = “draggable” ) {
        // The element that we’re currently dragging
        curDrag = e.target;

        // Remember where the cursor position started, and where the
        // element was located
        origX = getX( e ) + (parseInt( curDrag.style.left ) || 0);
        origY = getY( e ) + (parseInt( curDrag.style.top ) || 0);

        // Watch for the mouse to move, or life
        document.mousemove = dragMove;
        document.mouseup = dragStop;
    }
    
};

// Watch for the mouse to move
function dragMove(e) {
    // Normalize the Event object
    e = fixEvent( e );

    // Set the new cursor position
    curDrag.style.left = getX(e) – origX + “px”;
    curDrag.style.top = getY(e) – origY + “px”;
}

// Look for the drag to end
function dragStop(e) {
    // Normalize the Event object
    e = fixEvent( e );

    // Reset all of our watcher methods
    curDrag = document.mousemove = document.mouseup = null;
}

// Adjust the event object, to make it sane
function fixEvent(e) {
    // Make all the IE-centric parameters be W3C-like
    if (!e) {
        e = window.event;
        e.target = e.srcElement;
        e.layerX = e.offsetX;
        e.layerY = e.offsetY;
    }
    return e;
}
