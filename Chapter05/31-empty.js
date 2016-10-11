// Remove all of an Element’s children from the DOM
function empty( elem ) {
    while ( elem.firstChild )
        remove( elem.firstChild );
}
