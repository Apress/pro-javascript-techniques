// Find all the form input elements
var input = document.getElementsByTagName(“input”);
for ( var i = 0; i < input.length; i++ ) {

    // Find all the checkboxes
    if ( input[i].getAttribute(“type”) == “checkbox” ) {

        // Uncheck the checkbox
        input[i].removeAttribute(“checked”);

    }

}
