// Find the previous image and show it
function prevImage() {
    // Locate the previous gallery image and show it
    showImage( prev( curImage ) );
		
    // Prevent the link from operating as normal
    return false;
}

// Find the next image and show it
function nextImage() {
    // Locate the next gallery image and show it
    showImage( next( curImage ) );
		
    // Prevent the link from operating as normal
     return false;
}

