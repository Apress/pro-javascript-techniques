domReady(function(){
    // Make sure that the results popup is closed, to begin with
    hide( id("results") );

    // Keep track of which users have already been entered
    var doneUsers = {};
    
    // Keep track of which user is currently selected
    var curPos;
    
    // Watch for input in the entry field
    id("q").onkeypress = function(e){
        // Get all of the users in the result set
        var li = id("results").getElementsByTagName("li");
        
        // If the [TAB] or [Enter] keys are pressed
        if ( e.keyCode == 9 || e.keyCode == 13 ) {
            // Reset the list of current users
            loadDone();
            
            // If the currently selected user is not in the list of selcted
            // users, add it on to the input
            if ( !doneUsers[ curPos.id ] )
                addUser( curPos );
            
            // Stop the key from doing its normal action
            e.preventDefault();
            return false;
        
        // If the up key is presssed
        } else if ( e.keyCode == 38 )
            // Select the previous user, or the last user (if we're at the beginning)
            return updatePos( curPos.previousSibling || li[ li.length - 1 ] );
            
        // If the down key is pressed
        else if ( e.keyCode == 40 )
            // Select the next user, or the first user (if we're at the end)
            return updatePos( curPos.nextSibling || li[0] );
    };

    // Initialize the delayed input checks on our input
    delayedInput({
        // We're attaching to the input text field
        elem: id("q"),
        
        // We're going to start searching after only 1 character of input
        chars: 1,

        // When the text field loses focus, close the results popup
        focus: true,
        
        // Handle when the result popup should be opened up
        open: function(q,open){
            // Get the last word out of the comma-separated list of words
            var w = trim( q.substr( q.lastIndexOf(',')+1, q.length ) );

            // Make sure that we're dealing with a word, at least
            if ( w ) {
                // Show the loading spinner animation
                show( id("qloading") );

                // Make sure that no user is currently selected
                curPos = null;
                
                // Get the UL that holds all the results
                var results = id("results").lastChild;
                
                // And empty it out
                results.innerHTML = "";
                
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
                        
                        // Re-initalize the list of users that we've pulled in
                        loadDone();
                        
                        // Go through each of the returned users
                        var li = results.getElementsByTagName( "li" );
                        for ( var i = 0; i < li.length; i++ ) {
                            
                            // If we're already added the user, remove the LI for it
                            if ( doneUsers [ li[i].id ] )
                                results.removeChild( li[i--] );
                            
                            // Otherwise, bind some events to the user li
                            else {
                                
                                // Whenever the user mouses over the li,
                                // set it to be the currently hilighted user
                                li[i].onmouseover = function(){
                                    updatePos( this );
                                };
                                
                                // When the user is clicked
                                li[i].onclick = function(){
                                    // Add the user to the input
                                    addUser( this );
                                    
                                    // And focus back on the input again
                                    id("q").focus();
                                };
                            }
                        }
                        
                        // Go through the list of user li
                        li = results.getElementsByTagName( "li" );
    
                        // If there are no users left (we've added them all)
                        if ( li.length == 0 )
                            // Then hide the results
                            hide( id("results") );

                        else {
                        
                            // Add 'odd' classes to each of the remaining users
                            // to give them a striping
                            for ( var i = 1; i < li.length; i += 2 )
                                addClass( li[i], "odd" );
    
                            // Set the currently selected user to the first one
                            updatePos( li[0] );
                            
                            // And then show the results
                            show( id("results") );
                        }
                    }
                });
            }
        },
        
        // When the popup needs to be closed
        close: function(){
            // Hide the result set
            hide( id("results") );
        }
    });
    
    function trim(s) {
        return s.replace(/^\s+/,"").replace(/\s+$/, "");
    }

    // Change the hilite of the user that's currently selected
    function updatePos( elem ) {
        // Update the position to the currently selected element
        curPos = elem;
        
        // Get all the user li elements
        var li = id("results").getElementsByTagName("li");
        
        // Remove the 'cur' class from the currently selected one
        for ( var i = 0; i < li.length; i++ )
            removeClass( li[i], "cur" );
        
        // And add the hilite to the current user item
        addClass( curPos, "cur" );
        
        return false;
    }

    // Re-initialize the list of users that have already been
    // entered into the text input by the user
    function loadDone() {
        doneUsers = {};
        
        // Go through the list of users (separated by commas)
        var users = id("q").value.split(',');
        for ( var i = 0; i < users.length; i++ ) {
            
            // Save the username (as the key) in an object hash
            doneUsers[ trim( users[i].toLowerCase() ) ] = true;
        }
    }

    // Add a user to the input text field
    function addUser( elem ) {
        // The text value of the text input
        var v = id("q").value;
        
        // Add the user's name at the end of the end of the input
        // Making sure that its separated with the correct comma
        id("q").value =
            ( v.indexOf(',') >= 0 ? v.substr(0, v.lastIndexOf(',') + 2 ) : '' )
            + elem.id + ", ";
 
        // Add the username to the master list (avoids having
        // to completely re-load the list)
        doneUsers[ elem.id ] = true;
 
        // Remove the user li element
        elem.parentNode.removeChild( elem );
        
        // And hide the results list
        hide( id("results") );
    }
});

