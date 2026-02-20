# Student Expense Analyzer

Name: Ranjot Singh

## What this program does
This program stores weekly student expenses in a JavaScript array.  
It prints all expenses, creates a new list with 15% tax, filters only Food expenses, and calculates totals using reduce().

## Callback Function Explanation
A callback function is a function that you pass into another function so it can be used while running that function.

In my code, I used callback functions inside:
- map() to change each expense (add tax)
- filter() to keep only Food expenses
- reduce() to add up the total spending
- forEach() to print each item

map(), filter(), and reduce() need callback functions because they need instructions on what to do with each item in the array.
