// You are given an array representing a series of transactions in a small business.
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]

Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]

******************************************************************/

let incomesTransactions = transactions.filter((income) => {
  if (income[0] == "income") {
    return true;
  } else {
    return false;
  }
});
console.log(incomesTransactions);

let expenseTransactions = transactions.filter((expense) => {
  if (expense[0] == "expense") {
    return true;
  } else {
    return false;
  }
});
console.log(expenseTransactions);

/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
       Output 3) 3200

Task 4) Calculate the total expenses and return it.
       Output 4) 800

******************************************************************/
let totalIncomes = 0;
let totalIncomesTransactions = transactions.forEach((income) => {
  if (income[0] == "income") {
    totalIncomes = totalIncomes + income[1];
  }
});
console.log(totalIncomes);

let totalExpenses = 0;
let totalExpensesTransactions = transactions.forEach((expense) => {
  if (expense[0] == "expense") {
    totalExpenses = totalExpenses + expense[1];
  }
});
console.log(totalExpenses);

/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
       Output 5) 2400

Task 6) Identify and create a new array with transactions (both incomes and expenses) above $500.
       Output 6) [["income", 1000], ["income", 1500]]

******************************************************************/
let totalNet = totalIncomes - totalExpenses;
console.log(totalNet);

let transactionsAbove500 = transactions.filter((transaction) => {
  if (transaction[1] > 500) {
    return true;
  } else {
    return false;
  }
});
console.log(transactionsAbove500);
