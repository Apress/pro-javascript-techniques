// Find the first <form> element and attach a ‘submit’ event handler to it
document.getElementsByTagName(“form”)[0].addEventListener(‘click’,function(e){
    // Stop all form submission attempts
    return stopDefault( e );
}, false);

// Attach a keypress event handler to the <body> element of the document
document.body.addEventListener(‘keypress’, myKeyPressHandler, false);

// Attach an load event hanlder to the page
window.addEventListener(‘load’, function(){ … }, false);
