// Create a new <li> element
var li = create(“li”);
attr( li, “class”, “new” );

// Create some new text contents and add it to the <li>
append( li, “Thanks for visiting!” );

// Add the <li> onto the top of the first Ordered List
before( first( tag(“ol”)[0] ), <li> );
