// Find all the <li> elements, to attach the event handlers to them
var li = document.getElementsByTagName(“li”);
for ( var i = 0; i < li.length; i++ ) {

    // Attach a mouseover event handler to the <li> element,
    // which changes the <li>s background to blue.
    li[i].onmouseover = function() {
        this.style.backgroundColor = ‘blue’;
    };

    // Attach a mouseout event handler to the <li> element
    // which changes the <li>s background back to its default white
    li[i].onmouseout = function() {
        this.style.backgroundColor = ‘white’;
    };

}
