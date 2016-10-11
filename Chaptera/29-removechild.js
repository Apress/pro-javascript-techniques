// Find all <div> elements 
var div = document.getElementsByTagName(“div”);
for ( var i = 0; i < div.length; i++ ) {
    // If  the <div> has one class of ‘warning’
    if ( div[i].className == “warning” ) {

        // Remove the <div> from the document
        div[i].parentNode.removeChild( div[i] );

        // Decrease the counter – because we just removed one of the <div>s
        i--;

    }
}
