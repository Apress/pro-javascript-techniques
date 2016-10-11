// Create the transparent, gray, overlay
var overlay = document.createElement("div");
overlay.id = "overlay";

// Make it so that when the grey background is clicked,
// the gallery and background are hidden
overlay.onclick = hideOverlay;
		
// Add the overlay into the DOM
document.body.appendChild( overlay );

