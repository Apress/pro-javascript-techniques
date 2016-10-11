// Find all <a> elements within the document
var a = document.getElementsByTagName(“a”);
for ( var i = 0; i < a.length; i++ ) {

    // If the link points to the same  page that we’re currently on
    if ( a[i].href == window.location.href ) {

        // Make it such that the link no longer ‘works’ when clicked
        a[i].onclick = function(e){
            return false;
        };

    }

}
