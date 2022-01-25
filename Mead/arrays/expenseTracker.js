let userData = {
    name: 'Akash',
    income: [],
    expenses: [],
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        });
    },
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    userSummary: function() {
        let userTotalExpense = 0;
        this.expenses.forEach(function(item) {
            userTotalExpense += item.amount;
        });
        console.log(userTotalExpense);
        
        let userTotalIncome = 0;
        this.income.forEach(function(item) {
            userTotalIncome += item.amount;
        })
        console.log(userTotalIncome);
        let userNetWorth = userTotalIncome - userTotalExpense;
        return `${this.name} has a net worth of $${userNetWorth}. 
                His total expenses is $${userTotalExpense}.
                His total income is $${userTotalIncome}`;
    }
}


userData.addExpense('pub', 300);
userData.addExpense('disc', 500);
userData.addIncome('Income 21', 1000);
console.log(userData.userSummary());

// let userSummary = function(selectUserData) {
//     let calculateUserTotalExpense = 0;
//     for(let i=0; i<selectUserData.expenses.length; i++) {
//         calculateUserTotalExpense += selectUserData.expenses[i].amount;
//     }
//     let userNetWorth = selectUserData.income - calculateUserTotalExpense;
//     return `Hey! ${selectUserData.name}. Your income is ${selectUserData.income} and you networth is ${userNetWorth}`
// }

// let getUserSummary = userSummary(userData);
// console.log(getUserSummary);