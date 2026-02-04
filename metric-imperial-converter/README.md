# Metric to Imperial Converter

Simple browser-only converter using HTML, CSS, and JavaScript.

## Backend Logic Check

- `onclick="add()"` runs a JavaScript function when the button is clicked.
- `document.getElementById("a").value` gets whatever the user typed in the input with id "a" (it comes as a string).
- We use `Number(...)` to turn the string into a number so we can do math.
- The result is displayed by putting the answer into a result element on the page (like a `<p>`), so it updates instantly.
- Improvement: show an error message if the input is empty or not a number.

## Screenshot
Saved in `screenshots/homepage.png`.
