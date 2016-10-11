// Load the posts using our handy ajax() function
ajax({

    // We're just requesting a simple web page, so just use GET
    type: "GET",

    // We're expecting an RSS feed, which is just an XML file
    data: "xml",

    // Get the RSS feed of the Nth page. When we first load this page
    // we're on page '1', so we start at 2 and work our way back in time
    url: "./?feed=rss&paged=" + ( ++curPage ),

    // Watch for when the RSS feed has been successfully retrieved
    onSuccess: function( rss ){
        // Traverse the RSS XML document through its DOM
    }

});

