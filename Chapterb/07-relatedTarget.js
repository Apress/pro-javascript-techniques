// Find all the <li> elements in the document
var li = document.getElementsByTagName(“li”);
for ( var i = 0; i < li.length; i++ ) {

    // and attach mouseover handlers to them
    li[i].onmouseover = function(e){

        // If the mouse is entering for the first time (from the parent)
        if ( e.relatedTarget == this.parentNode ) {
            // display the last child element (which happens to be another <ol>)
            this.lastChild.style.display = ‘block’;
        }

    };

}
