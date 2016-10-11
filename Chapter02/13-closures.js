// Find the element with an ID of 'main'
var obj = document.getElementById("main");

// Change it's border styling
obj.style.border = "1px solid red";

// Initialize a callback that will occur in one second
setTimeout(function(){
    // Which will hide the object
    obj.style.display = 'none';
}, 1000);

// A generic function for displaying a delayed alert message
function delayedAlert( msg, time ) {
    // Initialize an enclosed callback
    setTimeout(function(){
        // Which utilizes the msg passed in from the enclosing function
        alert( msg );
    }, time );
}

// Call the delayedAlert function with two arguments
delayedAlert( "Welcome!", 2000 );

