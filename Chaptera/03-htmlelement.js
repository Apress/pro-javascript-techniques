// Add a new method to all HTML DOM Elements
// that can be used to see if an Element has a specific class, or not.
HTMLElement.prototype.hasClass = function( class ) {
    return new RegExp("(^|\\s)" + class + "(\\s|$)").test( this.className );
};
