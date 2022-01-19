let tipCalculator = function(totalBill, tipPercentage = 0.20) {
    let tip = totalBill * tipPercentage;
    return `A tip with ${tipPercentage} percentage on $${totalBill} will be $${tip}`;
}

let tipOne = tipCalculator(20);
console.log(tipOne);