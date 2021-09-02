let s = 'aksahsa@password';
let checkPassword = function(str) {
    if(str.length < 9 || str.includes('password')) {
        return false;
    } else {
        return true;
    }
}

console.log(checkPassword(s))