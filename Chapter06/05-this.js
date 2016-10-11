// Find all <li> elements and bind the click handler to each of them
var li = document.getElementsByTagName(“li”);
for ( var i = 0; i < li.length; i++ ) {
    li[i].onclick = handleClick;
}

// The click handler – when called it changes the background and
// foreground color of  the specified element
function handleClick() {
    this.style.backgroundColor = “blue”;
    this.style.color = “white”;
}
