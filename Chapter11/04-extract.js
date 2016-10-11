// We're going to iterate through each of the posts in the RSS feed
var items = rss.getElementsByTagName("item");

for ( var i = 0; i < items.length; i++ ) {

    // Extract the title, description, and link from the rss feed <item> elements
    var title = elem.getElementsByTagName("title")[0].firstChild.nodeValue;
    var desc = elem.getElementsByTagName("description")[0].firstChild.nodeValue;
    var link = elem.getElementsByTagName("link")[0].firstChild.nodeValue;

}

