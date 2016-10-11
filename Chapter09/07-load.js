// Keep track of which image we're current looking at
var curImage = null;

// Wait for the document to finish loading before modifying
// or traversing the DOM
window.onload = function() {
    /*
     * Create the following DOM structure:
     * <div id="overlay"></div>
     * <div id="gallery">
     *     <div id="gallery_image"></div>
     *     <div id="gallery_prev"><a href="">&laquo; Prev</a></div>
     *     <div id="gallery_next"><a href="">Next &raquo;</a></div>
     *     <div id="gallery_title"></div>
     * </div>
     */
		 
    // Create the overall gallery holder
    var gallery = document.createElement("div");
    gallery.id = "gallery";
		
    // And add in all the organization divs
    gallery.innerHTML = '<div id="gallery_image"></div>' +
        '<div id="gallery_prev"><a href="">&laquo; Prev</a></div>' +
        '<div id="gallery_next"><a href="">Next &raquo;</a></div>' +
        '<div id="gallery_title"></div>';
		
    // Add the gallery into the DOM
    document.body.appendChild( gallery );
		
    // Handle support for which the next and previous links
    // are clicked within the gallery
    id("gallery_next").onclick = nextImage;
    id("gallery_prev").onclick = prevImage;
		
    // Locate all the galleries on the site
    var g = byClass( "gallery", "ul" );
		
    // Go through all of them
    for ( var i = 0; i < g.length; i++ ) {
         // And locate all the links to the slideshow images
         var link = tag( "a", g[i] );
				
         // Go through each of the image links
         for ( var j = 0; j < link.length; j++ ) {
             // Make it such that, when clicked, they display the
             // image gallery instead of going to the imagae
             link[j].onclick = function(){
                 // Show the gray background
                 showOverlay();
								
                 // Show the image, in the gallery
                 showImage( this.parentNode );
								
                 // Make sure that the browser doesn't go the
                 // image, like it normally would
                 return false;
             };
        }

        // Add the slideshow navigation to the gallery		
        addSlideShow( g[i] );
    }
};

