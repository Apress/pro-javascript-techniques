// We're going to load new page contents repeatedly, at a certain interval
setInterval(function(){

    // Load the posts using our handy ajax() function
    ajax({

        // We're just requesting a simple web page, so just use GET
        type: "GET",

        // We're expecting an RSS feed, which is just an XML file
        data: "xml",

        // Get the curent RSS feed (with the latest posts in it)
        url: "./?feed=rss&paged=1",

        // Watch for when the RSS feed has been successfully retrieved
        onSuccess: function( rss ){

            // We're loading the new posts into the <div> that has an ID of "content"
            var content = document.getElementById("content");

            // Get the URL of the most recent post (to make sure that we don't do any
            // do any duplicate posts)
            var recentURL = content.getElementsByTagName("h2")[0].firstChild.href;

            // We're going to iterate through each of the posts in the RSS feed
           var items = rss.getElementsByTagName("item");

            // We're going to be putting all the new items in a separate array
            var newItems = [];

            // Go through each of the items
            for ( var i = 0; i < items.length; i++ ) {

                // Forcefully stop the loop if an "old" post was found 
                if ( getData( items[i] ).link == recentURL )
                    break;

                // Add the new item to the temporary array
                newItems.push( items[i] );

            }

            // Go through all of the new items, in reverse order, to make sure that they're in
            // the right order when they go into the site 
            for ( var i = newItems.length - 1; i >= 0; i-- ) {
                // Place the new entry into the document
                content.insertBefore( makePost( newItems[i] ), content.firstChild );
            }

        }
    });

// Load the new page contents once a minute
}, 60000 );

