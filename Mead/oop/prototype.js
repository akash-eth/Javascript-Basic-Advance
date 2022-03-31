const Person = function(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
}

// let person1 = new Person('amit', 'sharma', 23);
// console.log(person1);

Person.prototype.getBio = function() {
    let bio =  `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio += `${this.firstName} likes ${like}. `
    })

    return bio;
}

let person2 = new Person('akash', 'bhardwaj', 21)
console.log(person2.getBio());

Person.prototype.setName = function(fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
}

let person3 = new Person('Andrew', 'Mead', 28, ['biking', 'music']);
person3.setName('John Doe');
console.log(person3.getBio());

Person.prototype.getThis = function() {
    return this
}

console.log(person2.getThis());
console.log(person3.getThis());
