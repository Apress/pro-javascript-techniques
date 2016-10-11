// Find all the parents of this node, that are an <li> element
var cur = this.parentNode;
while ( cur != null ) {
    // Once the element is found, and the name verified, add a class
    if ( cur.nodeName == ‘LI’ )
        cur.className += “ current”;
    cur = this.parentNode;
}
