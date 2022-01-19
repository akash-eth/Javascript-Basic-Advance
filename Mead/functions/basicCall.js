let tempCalc = function(tempInFerhenhite) {
    let degreeCelcius = (tempInFerhenhite - 32) * 5/9;
    return degreeCelcius;
}

let val1 = tempCalc(32);
let val2 = tempCalc(68);

console.log(val1, 'and' ,val2);