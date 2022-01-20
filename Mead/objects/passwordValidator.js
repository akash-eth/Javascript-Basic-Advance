let passwordValidator = function(enterPassword) {
    if(enterPassword.includes('password') && enterPassword.length < 8) {
        return `invalid password`
    } else {
        return 'you entered a valid password'
    }
}

let checkPassword = passwordValidator('ak');
console.log(checkPassword);