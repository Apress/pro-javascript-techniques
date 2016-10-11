// Watch for the user resizing the browser window
window.onresize = function() {
    // Locate the document element (to be used to find the window width)
    var de = document.documentElement;

    // Figure out the width of the browser
    // (unfortunately, every browser likes to do this differently)
    var w = window.innerWidth || (de && de.clientWidth) || document.body.clientWidth;

    // If the window is too small, add a class to document element
    de.className = w < 990 ? "small" : "";
};
