// Bind a click handler onto the entire document
document.onclick = function(e){
    // Neutralize the Event object
    e = e || window.event;
    var t = e.target || e.srcElement;

    // If the control key was held down while the click was made
    if ( e.ctrlKey )
        // Remove the clicked node
        t.parentNode.removeChild( t );
};
