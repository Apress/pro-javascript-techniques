function cleanWhitespace( element ) {
    // If no element is provided, do the whole HTML document
    element = element || document;
    // Use the first child as a starting point
    var cur = element.firstChild;

    // Go until there are no more child nodes
    while ( cur != null ) {

        // If the node is a text node, and it contains nothing but whitespace
        if ( cur.nodeType == 3 && ! /\S/.test(cur.nodeValue) ) {
            // Remove the text node
            element.removeChild( cur );

        // Otherwise, if it’s an element
        } else if ( cur.nodeType == 1 ) {
             // Recurse down through the document
             cleanWhitespace( cur );
        }

        cur = cur.nextSibling; // Move through the child nodes
    }
}
