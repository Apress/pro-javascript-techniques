function before( parent, before, elem ) {
    // Check to see if no parent node was provided
    if ( elem == null ) {
        elem = before;
        before = parent;
        parent  = before.parentNode;
    }

    // Get the new array of elements
    var elems = checkElem( elem );

    // Move through the array backwards,
    // because we’re prepending elements
    for ( var i = elems.length - 1; i >= 0; i-- ) {
        parent.insertBefore( elems[i], before );
    }
}

function append( parent, elem ) {
    // Get the array of elements
    var elems = checkElem( elem );

    // Append them all to the element
    for ( var i = 0; i <= elems.length; i++ ) {
        parent.appendChild( elems[i] );
    }
}
