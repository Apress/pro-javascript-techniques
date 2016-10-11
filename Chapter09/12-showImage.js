// Show the current gallery image
function showImage(cur) {
    // Remember which image we're currently dealing with
    curImage = cur;
		
    // Find the gallery image
    var img = id("gallery_image");
		
    // Remove the image, if there's one already there
    if ( img.firstChild )
         img.removeChild( img.firstChild );
				
    // And add our new image in, instead
    img.appendChild( cur.firstChild.cloneNode( true ) );

    // We're setting the caption of the gallery image to
    // the 'alt' contents of the regular image
    id("gallery_title").innerHTML = cur.firstChild.firstChild.alt;
				
    // Locate the main gallery
    var gallery = id("gallery");
		
    // Set the correct class (so that it's the correct size)
    gallery.className = cur.className;
		
    // Then fade it in smoothly
    fadeIn( gallery, 100, 10 );
		
    // Make sure that the gallery is positioned in the right place
    // on the screen
    adjust();
}

