// Let’s assume that we already have an IFrame in the page
// with an ID of ‘iframe’
var iframe = document.getElementById(“iframe”);

// Locate all <a> elements on the page
var a = document.getElementsByTagName(“a”);
for ( var i = 0; i < a.length; i++ ) {

    // Bind a click handler to the <a>
    a[i].onclick = function(e) {
        // Set the IFrame’s location
        iframe.src = this.href;

        // Prevent the browser from ever visiting the web site pointed to from
        // the <a> (which is the default action)
        return stopDefault( e );
    };

}
