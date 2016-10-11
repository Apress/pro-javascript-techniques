// Find all the <li> elements in the document
var li = document.getElementsByTagName(“li”);
for ( var i = 0; i < li.length; i++ ) {

    // Watch for the user to move his mouse over an <li>
    li[i].onmouseover = function(e){
        // If this is a W3C-compatible browser
        if ( e )
            // Use stopPropogation to stop the event bubbling
            e.stopPropogation();

        // Otherwise, it’s Internet Explorer
        else
            // So set cancelBubble to true to stop the event bubbling
            e.cancelBubble = true;

        // finally, hilite the background of the <li>
        this.style.background = “#EEE”;
    };

    // When the mouse if moved back out of the <li>
    li[i].onmouseout = function(){
        // Reset the backgound color back to white
        this.style.background = “#FFF”;
    };

}
