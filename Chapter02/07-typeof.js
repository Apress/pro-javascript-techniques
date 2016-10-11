// Check to see if our number is actually a string
if ( typeof num  == "string" )
    // If it is, then parse a number out of it
    num = parseInt( num );

// Check to see if our array is actually a string
if ( typeof arr == "string" )
    // If that's the case, make an array, splitting on commas
    arr = arr.split(",");

