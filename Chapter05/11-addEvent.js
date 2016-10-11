// Wait until the page is loaded
// (Uses addEvent, described in the next chapter)
addEvent(window, “load”, function() {
    // Perform HTML DOM operations
    next(  id(“everywhere”) ).style.background = ‘blue’;
});
