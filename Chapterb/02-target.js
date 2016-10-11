// Bind a Double-Click listener to the document
document.ondblclick = function(e) {
    // Neutralize the Event object
    e = e || window.event;

    // Find thet correct target node
    var t = e.target || e.srcElement;

    // remove the node from the DOM
    t.parentNode.removeChild( t );
};
