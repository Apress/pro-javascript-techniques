// Create a default, global, namespace
var YAHOO = {};

// Setup some child namespaces, using objects
YAHOO.util = {};

// Create the final namespace, which contains a property with a function
YAHOO.util.Event = {
    addEventListener: function(){ ... }
};

// Call the function within that particular namespace
YAHOO.util.Event.addEventListener( ... )

