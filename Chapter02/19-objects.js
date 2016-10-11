// Creates a new Object object and stores it in 'obj'
var obj = new Object();

// Set some properties of the object to different values
obj.val = 5;
obj.click = function(){
    alert( "hello" );
};

// Here is some equivalent code, using the {…} shorthand
// along with key-value pairs for defining properties
var obj = {

    // Set the property names and values use key/value pairs
    val: 5,
    click: function(){
        alert( "hello" );
    }

};

