class User {
    constructor (name, email) {
        this.name = name;
        this.email = email;
    }
    courseList = []
    getInfo() {
        return {name: this.name, email: this.email}
    }
    enrollCourse(name) {
        this.courseList.push(name)
    }
    getCourseList() {
        return this.courseList;
    }

}

//Now, we need to export this to make it available from any other file !!

module.exports = User;