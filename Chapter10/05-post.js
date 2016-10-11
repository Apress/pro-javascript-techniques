// Create the request object
var xml = new XMLHttpRequest();

// Open the asynchronous POST request
xml.open("POST", "/some/url.cgi", true);

// Set the content-type header, so that the server 
// knows how to interpret the data that we're sending
xml.setRequestHeader(
    "Content-Type", "application/x-www-form-urlencoded");

// Make sure the browser sends the right content length of the serialized data –
// Mozilla-based browsers sometimes have trouble with this
if ( xml.overrideMimeType )
    xml.setRequestHeader("Connection", "close");

// Establish the connection to the server and send the serialized data
xml.send( serialize( data ) );

