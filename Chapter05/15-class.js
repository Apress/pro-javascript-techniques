function class(name,type) {
    var r = [];
    // Locate the class name (allows for multiple class names)
    var re = new RegExp("(^|\\s)" + name + "(\\s|$)");

    // Limit search by type, or look through all elements
    var e = document.getElementsByTagName(type || “*”);
    for ( var j = 0; j < e.length; j++ )
        // If the element has the class, add it for return
        if ( re.test(e[j]) ) r.push( e[j] );

    // Return the list of matched elements
    return r;
}
