// Get the textarea to watch for updates
var t = document.getElementsByTagName(“textarea”)[0];

// Grab the current value of a <textarea> and update a live preview,
// everytime that it’s changed
t.onkeypress = function() {
    document.getElementById(“preview”).innerHTML = this.value;
};
