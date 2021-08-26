var akash = {
    firstName: "Akash",
    lastName: "Bhardwaj",
    role: "Dev",
    courseCount: 12,
    getInfo: function() {              // this has a separate proto in the browser console with different functionalities
        console.log(`
            first name: ${this.firstName}
        `);
        console.log(`
            last name: ${this.lastName}
        `);
        console.log(`
            role name: ${this.role}
        `);
        console.log(`
            cousre count name: ${this.courseCount}
        `);
        
    }
}

console.log(akash); // this has it's own proto in the browser console

akash.getInfo();

//now,

var sam = {
    firstName: "sam",
    lastName: "karan",
    role: "Dev",
    courseCount: 02,

}

// sam.getInfo(); //this will give error as we don't have a getInfo function for sam !!
// here we will perform borrowing function to borrow method from others :

// as we know akash comes with a prototype named BIND:

//so, 

// akash.getInfo.bind(sam); // this alone will not give anything as, bind always gives you a reference back rather than a value
// akash.getInfo.bind(sam)(); // this works fine

//or
// var akashInfo = akash.getInfo.bind(sam);
// akashInfo();                            // gives the same thing


// now we wil use call prototype in place of bind:

akash.getInfo.call(sam); // this will directly work. As call gives us value and bind only gives us a reference back !!
