// Locate the <div> that we want to hover over
var div = document.getElementsByTagName(“div”)[0];

// Bind a single function to both the mouseover and mouseout events
div.onmouseover = div.onmouseout = function(e){
    // Normalize the Event object
    e = e || window.event;

    // Toggle the background color of the <div>, depending on the
    // type of mouse event that occurred
    this.style.background = e.type == “mouseover” ? “#EEE” : “#FFF”;
};
