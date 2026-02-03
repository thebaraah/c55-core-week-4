const chalk = require('chalk');
const transactions = require('./data');


function addTransaction(transaction) {
  // TODO: Implement this function
  transaction.push({...transaction}); //
}

function getTotalIncome() {
  // TODO: Implement this function
  let totalIncome=0;
  for(const transaction of transactions){
    if (transaction.type === 'income'){
      totalIncome += transaction.amount;
    }
  }
  return totalIncome;
}

function getTotalExpenses() {
  // TODO: Implement this function
  let totalExpenses=0;
  for(const transaction of transactions){
    if (transaction.type === 'expense'){
      totalExpenses += transaction.amount;
    }
  }
  return totalExpenses;
}

function getBalance() {
  // TODO: Implement this function
  return getTotalIncome() - getTotalExpenses();
}

function getTransactionsByCategory(category) {
  // TODO: Implement this function
  const result =[];
  for (const transaction of transactions){
    if (transaction.category === category){
      result.push(transaction);
    }
  }
  return result;
}

function getLargestExpense() {
  // TODO: Implement this function
  let largest = null;
  for(const transaction of transactions)
    if(transaction.type === 'expense'){
      if(largest=== null || transaction.amount > largest.amount){
        largest= transaction;
      }
    }
    return largest;
}

function printAllTransactions() {
  // TODO: Implement this function

  console.log(chalk.bold('All transactions'));

  for(const transaction of transactions){
    const amountColor = transaction.type === 'income'
        ? chalk.green(`€${transaction.amount}`)
        : chalk.red(`€${transaction.amount}`);

    console.log(
      `${transaction.id}. [${
        transaction.type.toUpperCase()
      }] ${transaction.description} - ${amountColor} (${chalk.yellow(
        transaction.category
      )})`
    );
  }

}

function printSummary(){
const totalIncome = getTotalIncome();
const totalExpenses = getTotalExpenses();
const balance = getBalance ();
const numberTransaction = transactions.length;
const largestExpense = getLargestExpense();

console.log(chalk.bold('\n📊 FINANCIAL SUMMARY 📊'));
console.log(chalk.bold(`Total Income: €${totalIncome}`));
console.log(chalk.bold(`Total Expenses: €${totalExpenses}`));

  const balanceColor =
    balance >= 0 ? chalk.cyan(`€${balance}`) : chalk.red(`€${balance}`);

  console.log(chalk.bold(`Current Balance: ${balanceColor}`));
  console.log(chalk.bold(`Total Transactions: ${transactions.length}`));

  if (largestExpense) {
    console.log(
      chalk.bold(
        `Largest Expense: ${largestExpense.description} (€${largestExpense.amount})`
      )
    );
  }
}

module.exports = { printAllTransactions, printSummary };
//console.log(chalk.bold('💰 PERSONAL FINANCE TRACKER 💰'));

//printAllTransactions();
//printSummary();