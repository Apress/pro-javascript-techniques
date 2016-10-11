// Create a new, simple, User object
function User() {}

// Create a new User object
var me = new User();

// Also creates a new User object (from the
// constructor reference of  the first)
var you = new me.constructor();

// We can see that the constructors are, in fact, the same
alert( me.constructor == you.constructor );

