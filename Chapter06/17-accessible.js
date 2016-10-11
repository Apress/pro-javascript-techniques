// Find all the <a> elements, to attach the event handlers to them
var li = document.getElementsByTagName(“a”);
for ( var i = 0; i < a.length; i++ ) {

    // Attach a mouseover and focus event handler to the <a> element,
    // which changes the <a>s background to blue when the user either
    // mouses over the link, or focuses on it (using the keyboard)
    a[i].onmouseover = a[i].onfocus = function() {
        this.style.backgroundColor = ‘blue’;
    };

    // Attach a mouseout and blur event handler to the <a> element
    // which changes the <li>s background back to its default white
    // when the user moves away from the link
    a[i].onmouseout = a[i].onblur = function() {
        this.style.backgroundColor = ‘white’;
    };

}
