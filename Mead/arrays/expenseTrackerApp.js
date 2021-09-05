let account = {
    name: 'Akash',
    income: [],
    expenses: []
}

let addExpenses = function(description, amount) {
    let data = {description: description, amount: amount};
    account.expenses.push(data);
}

let addIncome = function(description, amount) {
    let data = {description: description, amount: amount};
    account.income.push(data);
}

let getExpense = function() {
    let sum=0;
    account.expenses.forEach(function(item) {
        sum = sum + item.amount
    })
    return sum;
}

let getDetailedSummary = function() {
    let income = 0;
    account.income.forEach(function(item) {
        income += item.amount;
    })
    let expense = getExpense();
    let networth  = income - expense;
    return `${account.name} has $${networth} of networth. And has a income of $${income} with expense of $${expense}`;
}

addExpenses('food', 500);
addExpenses('edu', 200);
addExpenses('grocery', 100);
addExpenses('clothes', 400);

addIncome('work', 1000);
addIncome('freelance', 500);
addIncome('youtube', 100);

getExpense();

console.log(getDetailedSummary());