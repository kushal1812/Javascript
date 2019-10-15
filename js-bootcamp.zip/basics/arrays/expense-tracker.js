//expense -->description,amount
//addExpense() --- description,amount(2 args) --add an object to expenses array
//getAccountSummary()----total up all expenses---kushal has $1250 dollars in expenses

//1.add income array to account
//2.add income method ---> description,amount
//3.tweak get account summary--ksuhal has a balance of $10.$100 in income.$90 in expense .

const account = {
    name:'kushal',
    expenses:[],
    incomes:[],
    addExpense:function(description,amount){
        this.expenses.push(
            {
                description:description,
                amount:amount
            });
    },
    addIncome:function(description,amount){
        this.incomes.push(
            {
                description:description,
                amount:amount
            }
        )
    },
    getAccountSummary:function(){
        let totalExpenses= 0;
        let totalIncomes = 0;
        this.expenses.forEach(function(expense){
            totalExpenses+= expense.amount;
        });
        this.incomes.forEach(function(income){
            totalIncomes+=income.amount
        })
        const balance = totalIncomes - totalExpenses;
        return `${this.name} has a balance of $${balance}.
                $${totalIncomes} in income.
                $${totalExpenses} in expense`
    }
}

account.addExpense('Rent',950);
account.addExpense('Coffee',2);
account.addIncome('JOb',1000);
console.log(account.getAccountSummary())

