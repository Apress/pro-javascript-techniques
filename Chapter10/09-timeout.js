// Create the request object
var xml = new XMLHttpRequest();

// Open the asynchronous POST request
xml.open("GET", "/some/url.cgi", true);

// We're going to wait for a request for 5 seconds, before giving up
var timeoutLength = 5000;

// Keep track of when the request has been succesfully completed
var requestDone = false;

// Initalize a callback which will fire 5 seconds from now, cancelling
// the request (if it has not already occurred).
setTimeout(function(){
    requestDone = true;
}, timeoutLength);

// Watch for when the state of the document gets updated
xml.onreadystatechange = function(){
    // Wait until the data is fully loaded,
    // and make sure that the request hasn't already timed out
    if ( xml.readyState == 4 && !requestDone ) {

        // xml.responseXML contains the XML Document (if one was returned)
        // xml.responseText contains the response text (if no XML document was provided)

        // Clean up after ourselves, to avoid memory leaks
        xml = null;
    }
};

// Establish the connection to the server
xml.send();

