function text(e) {
    var t = "";

    // If an element was passed, get it’s children, 
    // otherwise assume it’s an array
    e = e.childNodes || e;

    // Look through all child nodes
    for ( var j = 0; j < e.length; j++ ) {
        // If it’s not an element, append its text value
        // Otherwise, recurse through all the element’s children 
        t += e[j].nodeType != 1 ?
            e[j].nodeValue : text(e[j].childNodes);
    }

    // Return the matched text
    return t;
}
