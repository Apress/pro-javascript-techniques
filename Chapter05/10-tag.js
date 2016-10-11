function tag(elem,name) {
    // If the context element is not provided, search the whole document
    return (elem || document).getElementsByTagName(name);
}
