// Bind a submit handler the the first form in the document
document.getElementsByTagName(“form”)[0].onsubmit = function(e) {

    // Get the name that the user entered
    var name = document.getElementById(“name”);

    // Set the <h1> element to contain Hello Name! (where name is the name
    // that the user entered into the form)
    document.getElementsByTagName(“h1”)[0].innerHTML = 
        “Hello “ + name + “!”;

    // Make sure that the form is not submitted to the server
    return false;

};
