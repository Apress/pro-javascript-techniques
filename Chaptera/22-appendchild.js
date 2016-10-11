// Create a new <ul> element
var ul = document.createElement(“ul”);

// Find all the first <li> elements
var li = document.getElementsByTagName(“li”);
for ( var i = 0; i < li.length; i++ ) {

    // append each matched <li> into  our new <ul> element
    ul.appendChild( li[i] );

}

// Append our new <ul> element at the end of the body
document.body.appendChild( ul );
