// A simple that sets the color style of its context
function changeColor( color ) {
    this.style.color = color;
}

// Calling it on the window object, which fails, since it doesn't
// have a style object
changeColor( "white" );

// Find the element with an ID of main
var main = document.getElementById("main");

// Set its color to black, using the call method
// The call method sets the context with the first argument
// and passes all the other arguments as arguments to the function
changeColor.call( main, "black" );

// A function that sets the color on  the body element
function setBodyColor() {
    // The apply method sets the context to the body element
    // with the first argument, the second argument is an array
    // of arguments that gets passed to the function
    changeColor.apply( document.body, arguments );
}

// Set the background color of the body to black
setBodyColor( "black" );

