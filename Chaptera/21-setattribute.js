// Create a new <a> element
var a = document.createElement(“a”).

// Set the URL to visit to Google’s web site
a.setAttribute(“href”,”http://google.com/”);

// Add the inner text, giving the user something to click
a.appendChild( document.createTextNode( “Visit Google!” ) );

// Add the link at the end of the document
document.body.appendChild( a );
