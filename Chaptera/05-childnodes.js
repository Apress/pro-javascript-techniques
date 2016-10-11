// Add a border to all child elements of <body>
var c = document.body.childNodes;
for ( var i = 0; i < c.length; i++ ) {
    // Make sure that the Node is an Element
    if ( c[i].nodeType == 1 )
        c[i].style.border = “1px solid red”;
}
