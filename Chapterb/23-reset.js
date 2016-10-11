// Find the first form on the page
var form = document.getElementsByTagName(“form”)[0];

// Watch for when the reset button is hit
form.onreset = function(){

    // Find all the <input> elements inside of the form
    var input = form.getElementsByTagName(“input”);

    // and reset their values to an empty string
    for ( var i = 0; i < input.length; i++ )
        input[i].value = ‘’;

};
