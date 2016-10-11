function delayedInput(opt) {
    // The amount of time to wait before looking for new user input
    opt.time = opt.time || 400;
  
    // The minimum number of characters to wait for, before firing a request
    opt.chars = opt.chars != null ? opt.chars : 3;
  
    // The callback to fire when the results popup should be opened,
    // and possibly when a new request should be made
    opt.open = opt.open || function(){};
  
    // The callback to execute when the results popup should be closed
    opt.close = opt.close || function(){};
  
    // Should the focus of the field be taken into account, for
    // opening/closing the results popup
    opt.focus = opt.focus !== null ? opt.focus : false;

    // Remember the original value that we're starting with
    var old = opt.elem.value;
  
    // And the current open/close state of the results popup
    var state = false;

    // Check to see if there's been a change in the input,
    // at a given interval
    setInterval(function(){
        // The new input value
        var newValue = opt.elem.value;
    
        // The number of characters that've been entered
        var len = s.length;

        // Quickly check to see if the value has changed since the last
        // time that we checked the input
        if ( old != newValue ) {
      
            // If not enough characters have been entered, and the 'popup'
            // is currently open
            if ( v < opt.chars && state ) {
        
                 // Close the display
                opt.close();
        
                // And remember that it's closed
                state = false;
        
            // Otherwise, if the minimum number of characters have been entered
            // as long as its more than one character
            } else if ( v >= opt.chars && v > 0 ) {
        
                // Open the results popup with the current value
                opt.open( newValue, state );
        
                // Remember that the popup is current open
                state = true;

            }

            // Save the current value for later
            old = newValue;
         }
    }, opt.time );

    // Watch for a key press
    opt.elem.onkeyup = function(){
        // If the keypress resulted in their being no more characters left,
        // close the results popup
        if ( this.value.length == 0 ) {
            // Close the popup
            opt.close();
      
            // Remember that it's closed
            state = false;
        }
    };

    // If we're also checking for user focus (to handle opening/closing)
    // the results popup
    if ( opt.focus ) {
        // Watch for when the user moves away from the input
        opt.elem.onblur = function(){
            // If its currently open
            if ( state ) {
                // Close the popup
                opt.close();
        
                // And remember that its closed
               state = false;
          }
      }
    
      // Watch for when the user focus' back on the popup
      opt.elem.focus = function(){
          // If it has a value, and its currently closed
          if ( this.value.length != 0 && !state ) {
              // Re-open the popup - but with a blank value
              // (this lets the 'open' function know not to re-retreive
              // new results from the server, just re-open the popup).
              opt.open( '', state );
        
              // And remembr that the popup is open
              state = true;
          }
      };
    }
}

