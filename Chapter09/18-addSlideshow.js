function addSlideshow( elem ) {
    // We're going to create some extra contextual information
    // surrounding the slideshow
				
    // Create the slideshow header, wrapper
    var div = document.createElement("div");
    div.className = "slideshow";
				
    // Show the name of the slideshow, based upon the 
    // title of the gallery
    var span = document.createElement("span");
    span.innerHTML = g[i].title;
    div.appendChild( span );
				
     // Create a link so that we can view all the
     // gallery images as a slideshow
     var a = document.createElement("a");
     a.href = "";
     a.innerHTML = "&raquo; View as a Slideshow";

     // Make it so that it starts the slideshow
     // whenever it's clicked
     a.onclick = function(){
         startShow( this.parentNode.nextSibling );
         return false;
     };
				
     // Add the new navigation and header to the page
    div.appendChild( a );
    elem.parentNode.insertBefore( div, elem );
}

