function stopDefault( e ) {
    // Prevent the default browser action (W3C)
    if ( e ) e.preventDefault();

    // A shortcut for stoping the browser action in IE
    return false;
}
