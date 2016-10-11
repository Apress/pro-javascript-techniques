// Create a new XHTML-compliant <p> 
var p = document.createElementNS("http://www.w3.org/1999/xhtml", "p");

// Add some text into the <p> element
p.appendChild( document.createTextNode( “Welcome to my site.” ) );

// Add the <p> element into the document
document.body.insertBefore( p, document.body.firstChild );
