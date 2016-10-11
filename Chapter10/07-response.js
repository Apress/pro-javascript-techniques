// Create the request object
var xml = new XMLHttpRequest();

// Open the asynchronous POST request
xml.open("GET", "/some/url.cgi", true);

// Watch for when the state of the document gets updated
xml.onreadystatechange = function(){
    // Wait until the data is fully loaded
    if ( xml.readyState == 4 ) {

        // xml.responseXML contains the XML Document (if one was returned)
        // xml.responseText contains the response text (if no XML document was provided)

        // Clean up after ourselves, to avoid memory leaks
        xml = null;
    }
};

// Establish the connection to the server
xml.send();

