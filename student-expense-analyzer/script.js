// Part 1: Create the data (arrays)
const expenses = [
  { name: "Lunch", category: "Food", amount: 12 },
  { name: "Bus Ticket", category: "Transport", amount: 4 },
  { name: "Coffee", category: "Food", amount: 3 },
  { name: "Movie", category: "Entertainment", amount: 15 },
  { name: "Groceries", category: "Food", amount: 28 },
  { name: "Taxi", category: "Transport", amount: 18 }
];

// Part 2: Accessing and iterating over arrays
console.log("=== All Expenses ===");
for (let i = 0; i < expenses.length; i++) {
  const exp = expenses[i];
  console.log(exp.name + " | " + exp.category + " | $" + exp.amount);
}

// Part 3: Using map() (data transformation)
// 15% tax = multiply by 1.15 and i round to 2 decimal places
const expensesWithTax = expenses.map(function (exp) {
  return {
    name: exp.name,
    category: exp.category,
    amount: Number((exp.amount * 1.15).toFixed(2))
  };
});

console.log("\n=== Expenses With 15% Tax ===");
expensesWithTax.forEach(function (exp) {
  console.log(exp.name + " | " + exp.category + " | $" + exp.amount);
});

// Part 4: Using filter() (data selection)
const foodExpenses = expenses.filter(function (exp) {
  return exp.category === "Food";
});

console.log("\n=== Food Expenses Only ===");
foodExpenses.forEach(function (exp) {
  console.log(exp.name + " | " + exp.category + " | $" + exp.amount);
});

// Part 5: Using reduce() (data aggregation)
const totalSpent = expenses.reduce(function (total, exp) {
  return total + exp.amount;
}, 0);

console.log("\nTotal Spent (All): $" + totalSpent);

// Bonus: total spent on Food only using filter() + reduce()
const totalFoodSpent = foodExpenses.reduce(function (total, exp) {
  return total + exp.amount;
}, 0);

console.log("Total Spent (Food Only): $" + totalFoodSpent);


