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
    static loggedIn() {         // static makes loggedIn function PRIVATE to the class and can not be inherited bu any child class. 
                                // if called then it throws error: "TypeError: sam.loggedIn is not a function"
        return "You are logged In"
    }
}

//----------Inheritence--------------
class subAdmin extends User {
    constructor (name, email) {     // we can direcctly pass name and email into:
        super (name, email)         // sam = new subAdmin("sam", "email"), but using super is a good practice
    }
    getSubAdminInfo() {
        return "I am subAdmin"
    }
}

let akash = new User("Akash", "Akash@mail.com")
//console.log(akash.getInfo());
akash.courseEnroll("DSA")
akash.courseEnroll("MERN")
//console.log(akash.getCourseList());     // this will give us result
//console.log(akash.courseList);      // So, after making courseList private we can not directly access courseList, and gives UNDEFINED.


//------------ Using the subAdmin-----------

const sam = new subAdmin("sam", "sam@mail.com");
console.log(sam.getSubAdminInfo());
console.log(sam.loggedIn());
console.log(sam.getInfo());