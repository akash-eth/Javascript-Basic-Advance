let person = {
    name: "Andrew Mead",
    expenses: 0,
    income: 0
}

let setIncome = function(account, updatedIncome) {
    account.income += updatedIncome;
}

let setExpense = function(account, updatedExpense) {
    account.expenses += updatedExpense;
}

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
}

let accountSummary = function(account) {
    let netWorth = account.income - account.expenses;
    return `Account for ${account.name} has $${netWorth} of networth. His income is ${account.income} and monthly expense is ${account.expenses}`
}

setIncome(person, 100);
setExpense(person, 35);
accountSummary(person);
console.log(accountSummary(person));
resetAccount(person);
console.log(accountSummary(person));
