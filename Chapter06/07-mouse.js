// Locate, and traverse, all the elements in the DOM
var all = document.getElementsByTagName(“*”);
for ( var i = 0; i < all.length; i++ ) {

    // Watch for when the user moves his mouse over the element
    // and add a red border around the element
    all[i].onmouseover = function(e) {
        this.style.border = “1px solid red”;
        stopBubble( e );
    };

    // Watch for when the user moves back out of the element
    // and remove the border that we added
    all[i].onmouseout = function(e) {
        this.style.border = “0px”;
        stopBubble( e );
    };

}
