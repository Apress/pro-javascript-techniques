// Find all the <a> links within the document
var a = document.getElementsByTagName(“a”);
for ( var i = 0; i < a.length; i++ ) {

    // Create an image of the linked-to site’s favicon
    var img = document.createElement(“img”);
    img.src = a[i].href.split('/').splice(0,3).join('/') + '/favicon.ico';

    // Insert the image before the link
    a[i].parentNode.insertBefore( img, a[i] );

}
