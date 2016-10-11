<script type="application/javascript;version=1.7">
    // Old way of putting a series of numbers into an array
    var array = [];
    for ( var i = 0; i < 10; i++ ) {
        array.push( i );
    }

    // New way
    var array = [ i for ( i = 0; i < 10; i++ ) ];

    // Old way of putting object keys into an array
    var array = []
    for ( var key in obj ) {
         array.push( key );
    }

    // New Way
    var array = [ key for ( key in obj ) ];
</script>

