// Create a global object named 'Class'
var Class = {
    // it has a single function that creates a new object constructor
    create: function() {

        // Create an anonymous object constructor
        return function() {
            // This calls its own initialization method
            this.initialize.apply(this, arguments);
        }

    }
}

// Add a static method to the Object object which copies
// properties from one object to another
Object.extend = function(destination, source) {
    // Go through all of the properties to extend
    for (property in source) {
        // and add them to the destination object
        destination[property] = source[property];
    }

    // return the modified object
    return destination;
}

