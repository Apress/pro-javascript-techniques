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

