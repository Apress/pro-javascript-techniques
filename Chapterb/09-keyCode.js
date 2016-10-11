// Locate the first <li> element on the page
var cur = document.getElementsByTagName(“li”)[0];

// and make sure that it’s visible
cur.style.display = ‘block’;

// Watch for any keypresses on the page
document.onkeypress = function(e){
    // Normalize the Event object
    e = e || window.event;

    // If the left or right arrow keys were pressed
    if ( e.keyCode == 37 || e.keyCode == 39 ) {

        // hide the currently displayed <li> element
        cur.style.display = ‘none’;

        // If the left arrow was pressed, find the previous <li> element
        // (or loop back around and go to the last one)
        if ( e.keyCode == 37 )
            cur = cur.previousSibling || cur.parentNode.lastChild;

        // If the right arrow key was pressed, find the next <li> element
        // or if we’re at the end, go back to the first <li> element
        else if ( e.keyCode == 39 )
            cur = cur.nextSibling || cur.parentNode.firstChild;

        // show the next <li> in the sequence
        cur.style.display = ‘block’;
    }

};
