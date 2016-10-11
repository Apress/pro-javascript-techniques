// Watch for when a link is clicked (e.g. a Cancel link)
// and hide the parent element
document.getElementById(“cancel”).onclick = function(){
    this.parentNode.style.display = ‘none’;
};
