// Set the class for the first <h1> Element
attr( tag(“h1”)[0], “class”, “header” );

// Set the value for each <input> element
var input = tag(“input”);
for ( var i = 0; i < input.length; i++ ) {
    attr( input[i], “value”, “” );
}

// Add a border to the <input> Element that has a name of ‘invalid’
var input = tag(“input”);
for ( var i = 0; i < input.length; i++ ) {
    if ( attr( input[i], “name” ) == ‘invalid’ ) {
        input[i].style.border = “2px solid red”;
    }
}
