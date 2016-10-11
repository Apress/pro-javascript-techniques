function first( elem ) {
    elem = elem.firstChild;
    return elem && elem.nodeType != 1 ?
        nextSibling( elem ) : elem;
}
