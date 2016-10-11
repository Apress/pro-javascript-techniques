// Create the request object
var xml = new XMLHttpRequest();

// Open the asynchronous GET request
xml.open("GET", "/some/url.cgi?" + serialize( data ), true);

// Establish the connection to the server
xml.send();

