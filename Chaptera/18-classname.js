// Find all the <div> elements in the document
var div = document.getElementsByTagName(“div”);
for ( var i = 0; i < div.length; i++ ) {
    // Find all the <div> elements that have a single class of ‘special’
    if ( div[i].className == “special” ) {
        // And hide them
        div[i].style.display = ‘none’;
    }
}
