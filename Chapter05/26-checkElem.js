function checkElem( elem ) {
    // If only a string was provided, convert it into a Text Node
    return elem && elem.constructor == String ?
        document.createTextNode( elem ) : elem;
}
