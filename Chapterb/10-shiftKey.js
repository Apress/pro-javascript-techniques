// Bind a click handler onto the entire document
document.onclick = function(e){
    // Neutralize the Event object
    e = e || window.event;

    // If the shift key was held down while the click was made
    if ( e.shiftKey )
        // Display the menu
        document.getElementById(“menu”).style.display = ‘block’;
};
