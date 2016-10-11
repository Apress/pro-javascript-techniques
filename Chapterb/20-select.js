// Locate the first <select> menu on the page
var select = document.getElementsByTagName(“select”)[0];

// Bind a select event listener
select.onselect = function(){
    // When a new selection is made, redirect the user to its value
    // (which should be a URL)
    window.location.href = this.value;
};
