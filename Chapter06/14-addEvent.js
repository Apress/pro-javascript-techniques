// Wait for the page to finish loading
addEvent( window, “load”, function(){

    // Watch for any keypresses done by the user
    addEvent( document.body, “keypress”, function(e){
        // If the user hits the Spacebar + Ctrl key
        if ( e.keyCode == 32 && e.ctrlKey ) {

            // Display our special form
            this.getElementsByTagName(“form”)[0].style.display = ‘block’;

            // Make sure that nothing strange happens
            e.preventDefault();

        }
    });

});
