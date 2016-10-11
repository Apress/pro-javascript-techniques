// Find the first element in the <body>
var cur = document.body.firstChild;
while ( cur != null ) {
    // If an element was found, add the header class to it
    if ( cur.nodeType == 1 ) {
        cur.className += “ header”;
        cur = null;

    // Otherwise, continue navigating through the child nodes
    } else {
        cur = cur.nextSibling;
    }
}
