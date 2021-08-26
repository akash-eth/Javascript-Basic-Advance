class User {
    constructor (name, email) {
        this.name = name;
        this.email = email;
    }
    #courseList = []    // using # makes out method PRIVATE in a class. So, now we need to use # through the class
    getInfo() {
        return {name: this.name, email: this.email}
    }

    // It is a setter function. We pass args in getter functions
    courseEnroll(name) {
        this.#courseList.push(name)
    }

    // It is a getter function. We usually do not pass args in getter functions
    getCourseList() {
        return this.#courseList
    }
}

let akash = new User("Akash", "Akash@mail.com")
console.log(akash.getInfo());
akash.courseEnroll("DSA")
akash.courseEnroll("MERN")
console.log(akash.getCourseList());     // this will give us result
console.log(akash.courseList);      // So, after making courseList private we can not directly access courseList, and gives UNDEFINED.
