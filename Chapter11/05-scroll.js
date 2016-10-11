// We're going to see if we should load some more content based upon where
// the user is currently located on the page
window.onscroll = function(){
    // Check the position of the viewport within the page
    if ( curPage >= 1 && !loading && pageHeight() - scrollY() - windowHeight() < windowHeight() ) {
        // Request the RSS XML feed using an AJAX request
    }
};

