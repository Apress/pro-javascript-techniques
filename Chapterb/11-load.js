// Wait for the page to finish loading
window.onload = function(){

      // Locate the element with an ID of ‘cancel’ and bind a click handler
      document.getElementById(“cancel”).onclick = function(){

          // That when clicked, hides the ‘main’ element
          document.getElementById(“main”).style.display = ‘none’;

      };

};
