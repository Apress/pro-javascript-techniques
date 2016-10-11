// Convert all links to visible URLs (good for printing
// Find all <a> links in the document
var a = document.getElementsByTagName(“a”);
while ( a.length ) {

    // Create a <strong> element
    var s = document.createElement(“strong”);

    // Make the contents equal to the <a> link URL
    s.appendChild( document.createTextNode( a[i].href ) );

    // Replace the original <a> with the new <strong> element
    a[i].replaceChild( s, a[i] );

}
