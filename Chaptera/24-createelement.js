// Create a new <strong> element
var s = document.createElement(“strong”);

// Find the first paragraph
var p = document.getElementsByTagName(“p”)[0];

// Wrap the contents of the <p> in the <strong> element
while ( p.firstChild ) {
    s.appendChild( p.firstChild );
}

// Put the <strong> element (containing the old <p> contents)
// back into the <p> element
p.appendChild( s );
