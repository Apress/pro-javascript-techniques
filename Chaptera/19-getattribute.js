// Find all the form input elements
var input = document.getElementsByTagName(“input”);
for ( var i = 0; i < input.length; i++ ) {

    // Find the element that has a name of “text”
    if ( input[i].getAttribute(“name”) == “text” ) {

        // Copy the value into another element
        document.getElementById(“preview”).innerHTML = 
            input[i].getAttribute(“value”);

    }

}
