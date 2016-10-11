// Watch for input in the entry field
id("q").onkeypress = function(e){
    // Get all of the users in the result set
    var li = id("results").getElementsByTagName("li");
        
    // If the [TAB] or [Enter] keys are pressed
    if ( e.keyCode == 9 || e.keyCode == 13 ) {
        // Add the user to the text entry field
    
    // If the up key is presssed
    } else if ( e.keyCode == 38 )
        // Select the previous user, or the last user (if we're at the beginning)
        return updatePos( curPos.previousSibling || li[ li.length - 1 ] );
        
    // If the down key is pressed
    else if ( e.keyCode == 40 )
        // Select the next user, or the first user (if we're at the end)
        return updatePos( curPos.nextSibling || li[0] );
};

