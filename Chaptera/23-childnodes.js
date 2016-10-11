// Find the first <ul> element
var ul = document.getElementsByTagName(“ul”)[0];

// Clone the node and append it after the old one
ul.parentNode.appendChild( ul.cloneNode( true ) );
