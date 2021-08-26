var user = {
    firstName: "Akash",
    lastName: "Bhardwaj",
    role: "developer",
    siteVisitCount: 12,
    isGoogleLoggedIn: true,
    courses: [],
    buyCourse: function (courseName) {
        this.courses.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in ${this.courses.length}`
    },
}
user.buyCourse("data structures");
user.buyCourse("cryptography");
console.log(user.getCourseCount());