// Attach an error event handler
window.onerror = function( message ){

    // Create an <li> element to store our error message
    var li = document.createElement(“li”);
    li.innerHTML = message;

    // Find our error list (which has an ID of ‘errors’)
    var errors = document.getElementById(“errors”);

    // and add our error message to the top of the list
    errors.insertBefore( li, errors.firstChild );

};
