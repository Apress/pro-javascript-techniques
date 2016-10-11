// The constructor for our 'Lecture'
// Takes two strings, name and teacher
function Lecture( name, teacher ) {
    // Save them as local properties of the object
    this.name = name;
    this.teacher = teacher;
}

// A method of the Lecture class, used to generate
// a string that can be used to display Lecture information
Lecture.prototype.display = function(){
    return this.teacher + " is teaching " + this.name;
};

// A Schedule constructor that takes in an
// array of lectures
function Schedule( lectures ) {
    this.lectures = lectures;
}

// A method for constructing a string representing
// a Schedule of Lectures
Schedule.prototype.display = function(){
    var str = "";

    // Go through each of the lectures, building up
    // a string of information
    for ( var i = 0; i < this.lectures.length; i++ )
        str += this.lectures[i].display() + " ";

    return str;
};

