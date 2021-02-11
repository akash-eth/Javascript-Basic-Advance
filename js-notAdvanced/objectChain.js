// IMPORTANT : "Proto has all the properties that an object/ array contains. We can see it in the browser window" !!

// Example: we have array.length (this means array proto has a length property)

var User = function(firstName, lastName, courseCount) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.courseCount = courseCount;
    this.getCourseCount = function() {
        console.log(this.courseCount);
    }
}

User.prototype.getFirstName = function() {
    console.log(this.firstName);
}

User.prototype.getLastName = function() {
    console.log(this.lastName);
}

var akash = new User("Akash", "Bhar", 12);

if (akash.hasOwnProperty("firstName")) {        // hasOwnProperty is a part of PROTO, which tells weather the var exist inside proto or not
    akash.getFirstName();
}