<script type="application/javascript;version=1.7">
    // An example of using destructuring to swap 
    // the values of two variables
    [ b, a ] = [ a, b ]

    // A simple function that returns an array of strings
    function test() {
        return [ "John", "October" ];
    }

    // We can destructure the data that's returned into two
    // new variables – name and month
    var [ name, month ] = test();

    // An example of destructuring using an object
    var { name: myName } = { name: "John" };
    // Now myName == "John"

    // A simple data structure
    var users = [
        { name: "John", month: "October" },
        { name: "Bob", month: "December" },
        { name: "Jane", month: "May" }
    ];

    // Destructuring within a loop
    for ( let { name: name, month: month } in users ) {
        // Prints out alerts for John, Bob, and Jane
        alert( name + " was born in " + month );
    }
</script>

