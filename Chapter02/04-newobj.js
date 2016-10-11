// Set item equal to a new string object
var item = "test";

// itemRef now refers to the same string object
var itemRef = item;

// Concatenate some new text onto the string object
// NOTE: This creates a new object, and does not modify
// the original object.
item += "ing";

// The values of item and itemRef are NOT equal, as a whole
// new string object has been created
alert( item != itemRef );

