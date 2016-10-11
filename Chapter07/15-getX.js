// Find the horizontal position of the cursor
function getX(e) {
    // Normalize the event object
    e = e || window.event;

    // Check for the non-IE position, then the IE position, and finally return 0
    return e.pageX || e.clientX + document.body.scrollLeft || 0;
}

// Find the vertical position of the cursor
function getY(e) {
    // Normalize the event object
    e = e || window.event;

    // Check for the non-IE position, then the IE position, and finally return 0
    return e.pageY || e.clientY + document.body.scrollTop || 0;
}

