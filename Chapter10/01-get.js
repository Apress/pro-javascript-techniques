// If IE is used, create a wrapper for the XMLHttpRequest object
if ( typeof XMLHttpRequest == "undefined" )
        XMLHttpRequest = function(){
                // Internet Explorer uses an ActiveXObject to create a new
                // XMLHttpRequest object
                return new ActiveXObject(
                        // IE 5 uses a different XMLHTTP object from IE 6
                        navigator.userAgent.indexOf("MSIE 5") >= 0 ?
                        "Microsoft.XMLHTTP" : "Msxml2.XMLHTTP"
                );
        };

// Create the request object
var xml = new XMLHttpRequest();

// Open the socket
xml.open("GET", "/some/url.cgi", true);

// Establish the connection to the server and send any additional data
xml.send();
