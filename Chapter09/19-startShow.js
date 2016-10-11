// Start a slideshow of all the images within a particular gallery
function startShow(obj) {
    // Locate all the individual images of the gallery
    var elem = tag( "li", obj );
		
    // Locate the overall display gallery
    var gallery = id("gallery");
		
    // Go through each of the matched gallery images
    for ( var i = 0; i < elem.length; i++ )  new function() {
        // Remember which current element is being referenced
        var cur = elem[i];
				
        // We're going to show a new image every 5 seconds
        setTimeout(function(){
            // Show the specific image
            showImage( cur );
						
            // And start fading it out after 3.5 seconds
            // (for a 1 second fade)
            setTimeout(function(){
                fadeOut( gallery, 0, 10 );
            }, 3500 );
        }, i * 5000 );
						
    };
		
    // And then hide the overlay when it's all over
    setTimeout( hideOverlay, 5000 * elem.length );
		
    // But show the overlay, as the slideshow is just starting
    showOverlay();
}

