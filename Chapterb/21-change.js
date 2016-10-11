// Watch the ‘entryArea’ (which is a <textarea>) for any changes
document.getElementById(“entryArea”).onchange = function(){

    // When the area has been changed, update the live preview 
    document.getElementById(“preview”).innerHTML = this.value;

};
