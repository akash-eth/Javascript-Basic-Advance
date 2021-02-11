var User = function(firstName, courseCount, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.courseCount = courseCount;
    this.getCourseCount = function() {
        console.log(this.courseCount);
    };
};

// var akash = User("Aaksh", 12); // without new this will give us undefined !!
// console.log(akash);

User.prototype.userFirstName = function () {  //protoType is used to set unique method
    console.log(this.firstName);
}

User.prototype.userLastName = function () {
    console.log(this.lastName);
}

var akash = new User("Aaksh", 12, "Ji"); // we use new to generate a unique object instance
akash.getCourseCount();
akash.userFirstName();
akash.userLastName();

var sam = new User("Sam", 08, "Karan");
sam.getCourseCount();
sam.userFirstName();
sam.userLastName();