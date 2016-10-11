// Keep track of what "page" of the contents that we're currently on
var curPage = 1;

// Make sure that we don't load a page twice, at the same time
var loading = false;

// We're going to see if we should load some more content based upon where
// the user is currently located on the page
window.onscroll = function(){
    // We need to verify a couple things before we try and load some more contents
    // 1) We need to make sure that we're not at the last page of contents.
    // 2) We need to make sure that we're not already loading some new posts.
    // 3) We're only going to load new posts if we're scrolled near the bottom of the page
    if ( curPage >= 1 && !loading && pageHeight() - scrollY() - windowHeight() < windowHeight() ) {

        // Remember that we've started to load the new posts.
        loading = true;

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

                // We're loading the new posts into the <div> that has an ID of "content"
                var content = document.getElementById("content");

                // We're going to iterate through each of the posts in the RSS feed
                var items = rss.getElementsByTagName("item");
                for ( var i = 0; i < items.length; i++ ) {

                    // Place the new entry into the document
                    content.appendChild( makePost( items[i] ) );

                }

                // If there are no items to retrieve from the XML document,
                // we must be back as far as we can go
                if ( items.length == 0 ) {
                    curPage = 0;
                }
            },

            // Whenever the request has completed, we can try to load new items again
            onComplete: function(){
                loading = false;
            }
        });
    }
};

// A function for creating the complex DOM structure of a single post
function makePost( elem ) {
    // Lets extract the Link, Title, and Description data from each feed post
    var data = getData( elem );

    // Creating a new wrapper <div> to hold the post
    var div = document.createElement("div");
    div.className = "post";

    // Create the post header
    var h2 = document.createElement("h2");

    // This holds the title of the feed and has a link that points back to the post.
    h2.innerHTML = "<a href='" + data.link + "'>" + data.title + "</a>";

    // Add it in to the post wrapper <div>
    div.appendChild( h2 );

    // Now lets create a <div> to hold the long post contents
    var entry = document.createElement("div");
    entry.className = "entry";

    // Add the contents to the inside of the <div>
    entry.innerHTML = data.desc;
    div.appendChild( entry );

    // Finally, lets add a footer that links back
    var meta = document.createElement("p");
    meta.className = "postmetadata";
    meta.innerHTML = "<a href='" + data.link + "#comments'>Comment</a>";
    div.appendChild( meta );

    return div;
}

// A simple function for extracting data from a DOM element
function getData( elem ) {
    // We're going to return the data as a nicely formatted object
    return {
        // Extract the title, description, and link from the rss feed <item> element
        title: elem.getElementsByTagName("title")[0].firstChild.nodeValue,
        desc: elem.getElementsByTagName("description")[0].firstChild.nodeValue,
        link: elem.getElementsByTagName("link")[0].firstChild.nodeValue
    };
}

