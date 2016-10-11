// Create an array of items
var items = new Array( "one", "two", "three" );

// Create a reference to the array of items
var itemsRef = items;

// Add an item to the original array
items.push( "four" );

// The length of each array should be the same,
// since they both point to the same array object
alert( items.length == itemsRef.length );
