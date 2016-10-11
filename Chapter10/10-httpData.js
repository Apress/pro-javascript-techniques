// A function for extracting data from an HTTP reponse
// It takes two arguments, the XMLHttpRequest object and
// An optional argument – the type of data that you're expecting from the server
// Correct values include: xml, script, text, or html – the default is "", which
// determines what the data type is based upon the content-type header
function httpData(r, type) {
    // Get the content-type header
    var ct = r.getResponseHeader("content-type");

    // If no default type was provided, determine if some
    // form of XML was returned from the server
    var data = !type && ct && ct.indexOf("xml") >= 0;

    // Get the XML Document object if XML was returned from
    // the server, otherwise return the text contents returned by the server
    data = type == "xml" || data ? r.responseXML : r.responseText;

    // If the specified type is "script", execute the returned text
    // response as if it was JavaScript
    if ( type == "script" )
        eval.call( window, data );

    // Return the response data (either an XML Document or a text string)
    return data;
}

