// NOTE: This code DOES NOT work!
// Wait until the page is loaded, checking constantly
while ( ! window.loaded() ) { }

// The page is loaded now, so start doing stuff
document.getElementById(“body”).style.border = “1px solid #000”;
