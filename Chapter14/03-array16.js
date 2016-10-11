// A simple array of numbers
var tmp = [ 1, 2, 3, 4, 5, 3 ];

// indexOf( Object )
// Find the index of an object within an array of objects
tmp.indexOf( 3 ) == 2
tmp.indexOf( 8 ) == -1

// lastIndexOf( Object )
// Find the last of an object within an array of objects
tmp.lastIndexOf( 3 ) == 5

// forEach( Function )
// Call a function on every single object within an array
// The function is passed three arguments: The object, its index,
// and a reference to the array
tmp.forEach( alert );

// every( Function )
// Call the function on every object in the array, if it returns true
// for every object, return true
tmp.every(function(num){
    return num < 6;
}) == true

// some( Function )
// Call the function on every object in the array, if it returns true
// for any object, return true
tmp.some(function(num){
    return num > 6;
}) == false

// filter( Function )
// Trim the array by only keeping objects that match a specified
// criteria. An object is kept if the function returns 'true'.
tmp.filter(function(num){
    return num > 3;
}) == [ 4, 5 ]

// map( Function )
// Convert an array of objects to another set of objects. The result of
// the specified function converts an object to its new value
tmp.map(function(num) {
    return num + 2;
}) == [ 3, 4, 5, 6, 7, 5 ]

