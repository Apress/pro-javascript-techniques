function checkElem(a) {
    var r = [];
    // Force the argument into an array, if it isn’t already
    if ( a.constructor != Array ) a = [ a ];

    for ( var i = 0; i < a.length; i++ ) {
        // If there’s a String
        if ( a[i].constructor == String ) {
            // Create a temporary element to house the HTML
            var div = document.createElement("div");

            // Inject the HTML, to convert it into a DOM structure
            div.innerHTML = a[i];

             // Extract the DOM structure back out of the temp DIV
             for ( var j = 0; j < div.childNodes.length; j++ )
                 r[r.length] = div.childNodes[j];
        } else if ( a[i].length ) { // If it’s an array
            // Assume that it’s an array of DOM Nodes
            for ( var j = 0; j < a[i].length; j++ )
                r[r.length] = a[i][j];
        } else { // Otherwise, assume it’s a DOM Node
            r[r.length] = a[i];
        }
    }
    return r;
}
