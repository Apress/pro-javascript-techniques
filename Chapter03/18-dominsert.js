// We're going to try and include some other modules using JSAN
try {
    // Load in the two required JSAN libraries
    JSAN.use( 'Class' )
    JSAN.use( 'DOM.Utils' )

// If JSAN isn't loaded, it will throw an exception
} catch (e) {
    throw "DOM.Insert requires JSAN to be loaded";
}

// Make sure that the DOM namespace exists
if ( typeof DOM == 'undefined' )
    DOM = {};

// Create a new DOM.Insert constructor, which inherits from 'Object'
DOM.Insert = Class.create( 'DOM.Insert', Object, {
    // The constructor which takes two arguments
    initialize: function(element, content) {
        // An element to insert HTML into
        this.element = $(element);

        // The HTML string to insert
        this.content = content;
    
        // Try inserting the HTML using the Internet Explorer way
        if (this.adjacency && this.element.insertAdjacentHTML) {
            this.element.insertAdjacentHTML(this.adjacency, this.content);

        // Otherwise, try it the W3C way
        } else {
            this.range = this.element.ownerDocument.createRange();
            if (this.initializeRange) this.initializeRange();
            this.fragment = this.range.createContextualFragment(this.content);
            this.insertContent();
        }
    }
});

