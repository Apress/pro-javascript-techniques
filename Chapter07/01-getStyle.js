// Get a style property (name) of a specific element (elem)
function getStyle( elem, name ) {
    // If the property exists in style[], then it’s been set recently (and is current)
    if (elem.style[name])
        return elem.style[name];

    // Otherwise, try to use IE’s method
    else if (elem.currentStyle)
        return elem.currentStyle[name];

    // Or the W3C’s method, if it exists
    else if (document.defaultView && document.defaultView.getComputedStyle) {
        // It uses the traditional ‘text-align’ style of rule writing, instead of textAlign
        name = name.replace(/([A-Z])/g,"-$1");
        name = name.toLowerCase();

        // Get the style object and get the value of the property (if it exists)
        var s = document.defaultView.getComputedStyle(elem,"");
        return s && s.getPropertyValue(name);

    // Otherwise, we’re using some other browser
    } else
        return null;
}

