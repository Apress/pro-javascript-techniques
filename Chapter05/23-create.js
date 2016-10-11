function create( elem ) {
    return document.createElementNS ?
        document.createElementNS( 'http://www.w3.org/1999/xhtml', elem ) :
        document.createElement( elem );
}
