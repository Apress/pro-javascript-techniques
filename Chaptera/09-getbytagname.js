// Find all <div> Elements in the current HTML document
// and set their class to ‘hilite’
var d = document.getElementsByTagName(“div”);
for ( var i = 0; i < d.length; i++ ) {
    d[i].className = ‘hilite’;
}

// Go through all descendant elements of the element with 
// an ID of body. Then find all elements that have one class 
// equal to ‘hilite’. Then hide all those elements that match.
var all = document.getElementById(“body”).getElementsByTagName(“*”);
for ( var i = 0; i < all.length; i++ ) {
    if ( all[i].className == ‘hilite’ )
        all[i].style.display = ‘none’;
}
