//addIncome
//resetAccount
//getAccountSumary
//Account for andreaw has 900$ .1000$ in income.100$in expenses

let myAccount = {
    name :'kushal',
    totalExpenses:0,
    totalIncome:0
}

addIncome = function(account,totalIncome){
    account.totalIncome = account.totalIncome+totalIncome;
}

addExpense = function(account,expenseAmount){
    account.totalExpenses = account.totalExpenses+expenseAmount;

}

resetAccountSummary=function(account){
    account.totalExpenses=0;
    account.totalIncome=0;
}

getAccountSummary=function(account){
    let balance = account.totalIncome-account.totalExpenses;
    console.log(`Account for ${account.name} has ${balance}.${account.totalIncome} in income. ${account.totalExpenses} in expense`);
}

addIncome(myAccount,30000);
addExpense(myAccount,5000);
addExpense(myAccount,1000);
getAccountSummary(myAccount);
resetAccountSummary(myAccount);
console.log(myAccount);