// Find the first <form> element and attach a ‘submit’ event handler to it
document.getElementsByTagName(“form”)[0].onsubmit = function(e){
    // Stop all form submission attempts
    return stopDefault( e );
};

// Attach a keypress event handler to the <body> element of the document
document.body.onkeypress = myKeyPressHandler;

// Attach an load event hanlder to the page
window.onload = function(){ … };
