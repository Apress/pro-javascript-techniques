function attr(elem, name, value) {
    // Make sure that a valid name was provided
    if ( !name || name.constructor != String ) return '';

    // Figure out if the name is one of the weird naming cases
    name = { ‘for': 'htmlFor', 'class': 'className' }[name] || name;

    // If the user is setting a value, also
    if ( value != null ) {
        // Set the quick way first
        elem[name] = value;

        // If we can, use setAttribute
        if ( elem.setAttribute )
            elem.setAttribute(name,value);
    }

    // Return the value of the attribute
    return elem[name] || elem.getAttribute(name) || '';
}
