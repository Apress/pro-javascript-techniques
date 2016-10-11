// Locate all <a> elements on the page
var a = document.getElementsByTagName(“a”);
for ( var i = 0; i < a.length; i++ ) {

    // Bind a click handler to the <a>
    a[i].onclick = function(e) {
        // Set the title of the page to the URL of this link, instead of visiting it
        document.title = this.href;

        // Prevent the browser from ever visiting the web site pointed to from
        // the <a> (which is the default action)
        return false;
    };

}
