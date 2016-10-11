// A Object constructor that represents a classroom
function Classroom( students, teacher ) {
    // A private method used for display all the students in the class
    function disp() {
        alert( this.names.join(", ") );
    }

    // Store the class data as public object properties
    this.students = students;
    this.teacher = teacher;

    // Call the private method to display the error
    disp();
}

// Create a new classroom object
var class = new Classroom( [ "John", "Bob" ], "Mr. Smith" );

// Fails, as disp is not a public property of the object
class.disp();

