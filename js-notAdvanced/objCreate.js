var User =  {
    // name: "Aaksh Bhardwaj",  // will pass this dynamically below
    name: "",
    getUserName: function () {
        console.log(this.name);
    }
}

var akash = Object.create(User);
console.log(akash);
akash.name = "Akash Bhardwaj";
akash.getUserName();


// or we can perform:

var sam = Object.create(User, {    // this is a bit complicated
    name: {value: "Sammy Singh"},
    courseCount: {value: 12}
})

sam.getUserName();