let provideTip = function (totalAmount, tipPercentage) {
    let result = (totalAmount*tipPercentage)/100;
    return result;
}

let totalAmount=100;
let tipPercentage=20;
let tip = provideTip(totalAmount, tipPercentage);
console.log(`A ${tipPercentage}% tip on a bill of $${totalAmount} would be: $${tip}`);