// get the display box
let display = document.getElementById("display");

// this function adds numbers or operators when button is clicked
function appendValue(value) {
  display.value = display.value + value;
}

// clears everything from the display
function clearDisplay() {
  display.value = "";
}

// improvement: delete only last number instead of clearing all
function deleteLast() {
  display.value = display.value.slice(0, display.value.length - 1);
}

// calculate the result
function calculateResult() {
  try {
    // eval is used to solve the math expression
    display.value = eval(display.value);
  } catch {
    // if something goes wrong
    display.value = "Error";
  }
}