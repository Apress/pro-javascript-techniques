// Find all DT (Defintion Term) elements
var dt = document.getElementById(“dt”);
for ( var i = 0; i < dt.length; i++ ) {
    // Watch for when the term is clicked
    dt[i].onclick = function() {
        // Since each Term has an adjacent DD (Definition) element
        // We can display it when it’s clicked
        this.nextSibling.style.display = ‘block’;
    };
}
