<script type="application/javascript;version=1.7">
    // let Statement
    var test = 10;
    let( test = 20 ) {
        alert( test ); // alerts out 20
    }
    alert( test ); // alerts 10

    // let Expression
    var test = 10;
    alert( let( test = 20 ) test ); // alerts out 20
    alert( test ); // alerts 10

    // let Definition
    var test = 10;
    if ( test == 10 ) {
        let newTest = 20;
        test += newTest;
    }
    alert( test ); // alerts 30
    alert( newTest ); // fails, newText is undefined outside of the if statement

    // Using let in a for block
    for ( let i = 0; i < 10; i++ ) {
        alert( i );
    }
    alert( i ); // fails, i is undefined outside of the for statement
</script>

