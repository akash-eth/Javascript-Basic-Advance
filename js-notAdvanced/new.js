var User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
};

// var akash = User("Aaksh", 12); // without new this will give us undefined !!
// console.log(akash);

var akash = new User("Aaksh", 12);
console.log(akash);

var sam = new User("Sam", 08);
console.log(sam);