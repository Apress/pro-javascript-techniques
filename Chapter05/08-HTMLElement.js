HTMLElement.prototype.next = function() {
    var elem = this;
    do {
        elem = elem.nextSibling;
    } while ( elem && elem.nodeType != 1 );
    return elem;
};
