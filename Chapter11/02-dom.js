// We're loading the new posts into the <div> that has an ID of "content"
var content = document.getElementById("content");

// We're going to iterate through each of the posts in the RSS feed
var items = rss.getElementsByTagName("item");
for ( var i = 0; i < items.length; i++ ) {

    // Lets extract the Link, Title, and Description data from each feed post
    var data = getData( items[i] );

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

    // Place the new entry into the document
    content.appendChild( div );

}

