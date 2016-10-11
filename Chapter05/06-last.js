function last( elem ) {
    elem = elem.lastChild;
    return elem && elem.nodeType != 1 ?
        prevSibling( elem ) : elem;
}
