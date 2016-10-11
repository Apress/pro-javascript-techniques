// An element with an ID of main
var obj = document.getElementById("main");

// An array of items to bind to
var items = [ "click", "keypress" ];

// Iterate through each of the items
for ( var i = 0; i < items.length; i++ ) {
    // Use a self-executed anonymous function to induce scope
    (function(){
        // Bind a function to the elment
        obj[ "on" + items[i] ] = function() {
            // items[i] refers to a parent variable that has been successfully
            // scoped within the context of this for loop
            alert( "Thanks for your " + items[i] );
        };
    })();
}

