// Locate all anchor tags on the page
var anchors = document.getElementsByTagName("a");

// Loop through all anchor tags
for ( var i=0; i < anchors.length; i++ ) {
    var anchor = anchors[i];

    // Make sure that the link is a "lightbox" link
    if ( anchor.href && anchor.rel == "lightbox" ) {

        // Make it so that a Lightbox is shown on click
        anchor.onclick = function () {
            showLightbox(this);
            return false;
       };

    }
}

