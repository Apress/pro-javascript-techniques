function stopBubble(e) {
    // If an event object is provided, then this is a non-IE browser
    if ( e )
        // and therefore it supports the W3C stopPropagation() method
        e.stopPropagation();
    else
        // Otherwise, we need to use the Internet Explorer way of cancelling event bubbling
        window.event.cancelBubble = true;
}
