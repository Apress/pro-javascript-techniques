// Create a new Schedule object and save it in
// the variable 'mySchedule'
var mySchedule = new Schedule([
    // Create an array of the Lecture objects, which
    // are passed in as the only argument to the Lecture object
    new Lecture( "Gym", "Mr. Smith" ),
    new Lecture( "Math", "Mrs. Jones" ),
    new Lecture( "English", "TBD" )
]);

// Display the Schedule information as a pop-up alert
alert( mySchedule.display() );

