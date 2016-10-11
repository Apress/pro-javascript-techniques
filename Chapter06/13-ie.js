// Find the first <form> element and attach a ‘submit’ event handler to it
document.getElementsByTagName(“form”)[0].attachEvent(‘onclick’,function(){
    // Stop all form submission attempts
    return stopDefault();
},);

// Attach a keypress event handler to the <body> element of the document
document.body.attachEvent(‘onkeypress’, myKeyPressHandler);

// Attach an load event hanlder to the page
window.attachEvent(‘onload’, function(){ … });
