// Bind a click handler to the entire document
document.onclick = function(e) {
    // Normalize the Event objct
    e = e || window.event;

    // If a right-click was performmed
    if ( e.button == 2 ) {
        // Prevent the default action from occurring
        e.preventDefault();
        return false;
    }
};
