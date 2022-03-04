// we can not use THIS keyword in arrow functions:
// as it will return a object

// this returns a window object on regular function call!!

let user = {
    userName: 'user',
    getName: function() {
        return this.userName
    }
}
var userArrowName = 'user';

console.log(user.getName());
// let userName = 'user';

const arrowUser = {
    userName: 'arrowUser',
    getName: () => {
        // let userName = 'user';
        return this // => throws undefined!!
    }
}

console.log(arrowUser.getName());