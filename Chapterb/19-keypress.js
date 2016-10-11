// Find all <input> elements in the document
var input = document.getElementsByTagName(“input”);
for ( var i = 0; i < input.length; i++ ) {

    // Bind a keypress handler to the <input> element
    input[i].onkeypress = function(e) {
        // Prevent the default action, if the user presses the enter key
        return e.keyCode != 13;
    };

}
