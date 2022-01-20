let expenseTracker = {
    name: 'Akash',
    expense: 0,
    income: 0
}

function addExpense(tracker, amount) {
    tracker.expense = amount;
}

function addIncome(tracker, amount) {
    tracker.income = amount;
}

function resetAccount(tracker) {
    tracker.income = 0;
    tracker.expense = 0;
}

function getExpenseSummary(tracker) {
    return `${tracker.name} has ${tracker.income - tracker.expense}. His income is ${tracker.income} and expense is ${tracker.expense}`;
}

addIncome(expenseTracker, 1000);
addExpense(expenseTracker, 20);
addExpense(expenseTracker, 40);
let accountSummaryOne = getExpenseSummary(expenseTracker);
console.log(accountSummaryOne);
resetAccount(expenseTracker);
let accountSummaryTwo = getExpenseSummary(expenseTracker);
console.log(accountSummaryTwo);