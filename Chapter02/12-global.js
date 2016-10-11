// A function in which the value of foo is set
function test() {
    foo = "test";
}

// Call the function to set the value of foo
test();

// We see that foo is now globally scoped
alert( window.foo == "test" );

