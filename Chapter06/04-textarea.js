// Find the first <textarea> on the page and bind a keypress listener
document.getElementByTagName(“textarea”)[0].onkeypress = function(e){
    // If no event object exists, then grab the global (IE-only) one
    e = e || window.event;

    // If the Enter key is pressed, return false (causing it to do nothing)
    return e.keyCode != 40;
};
