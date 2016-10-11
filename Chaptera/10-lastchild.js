// Insert a new Element just before the last element in the <body>
var n = document.createElement(“div”);
n.innerHTML = “Thanks for visiting!”;

document.body.insertBefore( n, document.body.lastChild );
