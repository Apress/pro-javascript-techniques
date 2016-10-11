// Reposition the gallery to be at the center of the page
// even when the page has been scrolled
function adjust(){
    // Locate the gallery
    var obj = id("gallery");
		
    // Make sure that the gallery exists
    if ( !obj ) return;
		
    // Find its current height and width
    var w = getWidth( obj );
    var h = getHeight( obj );
		
    // Position the box, vertically, in the middle of the window
    var t = scrollY() + ( windowHeight() / 2 ) - ( h / 2 );
		
    // But no heigher than the top of the page
    if ( t < 0 ) t = 0;
		
    // Position the box, horizontally, in the middle of the window
    var l = scrollX() + ( windowWidth() / 2 ) - ( w / 2 );
		
    // But no less than the left of the page
    if ( l < 0 ) l = 0;
		
    // Set the adjusted position of the element
    setY( obj, t );
    setX( obj, l );
};

// Readjust the position of the gallery every time
// the user scrolls the page or resizes the browser
window.onresize = document.onscroll = adjust;

