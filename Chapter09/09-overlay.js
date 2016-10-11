// Hide the grey overlay and the current gallery
function hideOverlay() {
    // Make sure that we reset the current image
    curImage = null;
		
    // and hide the overlay and gallery
    hide( id("overlay") );
    hide( id("gallery") );
}

// Show the grey overlay
function showOverlay() {
    // Find the overlay
    var over = id("overlay");
		
    // Make it as tall and wide as the entire page
    // (this helps with scrolling)
    over.style.height = pageHeight() + "px";
    over.style.width = pageWidth() + "px";
		
    // And fade it in
    fadeIn( over, 50, 10 );
}

