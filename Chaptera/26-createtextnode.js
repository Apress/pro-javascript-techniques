// Create a new <h1> element
var h = document.createElement(“h1”);

// Create the header text and add it to the <h1> element
h.appendChild( document.createTextNode(“Main Page”) );

// Add the header to the start of the <body>
document.body.insertBefore( h, document.body.firstChild );
