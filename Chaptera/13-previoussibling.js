// Find all elements before this one and hide them
var cur = this.previousSibling;
while ( cur != null ) {
    cur.style.display = ‘none’;
    cur = this.previousSibling;
}
