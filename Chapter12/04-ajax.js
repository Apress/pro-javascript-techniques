// Do a request for new data
ajax({
    // Do a simple GET request to the CGI script which
    // returns an HTML block of LI elements
    type: "GET",
    url: "auto.cgi?q=" + w,
                    
    // Watch for when the HTML comes back
    onSuccess: function(html){
        // Insert it in to the results UL
        results.innerHTML = html;
                        
        // And hide the loading animation
        hide( id("qloading") );

        // Process the results...
    }
});

