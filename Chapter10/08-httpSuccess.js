// Check to see if an XMLHttpRequest object has a 'Success' state, or not.
// The function takes one argument, the XMLHttpRequest object
function httpSuccess(r) {
    try {
        // If no server status is provided, and we're actually 
        // requesting a local file, then it was successful
        return !r.status && location.protocol == "file:" ||

            // Any status in the 200 range is good
            ( r.status >= 200 && r.status < 300 ) ||

            // Successful if the document has not been modified
            r.status == 304 ||

            // Safari returns an empty status if the file has not been modified
            navigator.userAgent.indexOf("Safari") >= 0 && typeof r.status == "undefined";
    } catch(e){}

    // If checking the status failed, then assume that the request failed too
    return false;
}

