function before( parent, before, elem ) {
    // Check to see if no parent node was provided
    if ( elem == null ) {
        elem = before;
        before = parent;
        parent  = before.parentNode;
    }
    parent.insertBefore( checkElem( elem ), before );
}
