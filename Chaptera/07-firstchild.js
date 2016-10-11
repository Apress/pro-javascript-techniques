// Remove all child nodes from an element
var e = document.getElementById(“body”);
while ( e.firstChild )
    e.removeChild( e.firstChild );
