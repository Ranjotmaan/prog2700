// Timer variable used for inactivity reset
let timer;

// Prices of each product
const PRICE_MILK = 3.50;
const PRICE_BREAD = 2.25;
const PRICE_EGGS = 4.10;
const PRICE_RICE = 6.00;
const PRICE_APPLES = 2.80;
const PRICE_CHICKEN = 9.50;

// Starts or resets inactivity timer
function startTimer() {
  clearTimeout(timer);

  // Reset cart after 15 seconds of no activity
  timer = setTimeout(function () {
    resetCart("Cart reset due to inactivity.");
  }, 15000);
}

// Reads quantity from input field safely
function readQty(id) {
  let v = Number(document.getElementById(id).value);

  if (!document.getElementById(id).value) v = 0;
  if (isNaN(v) || v < 0) v = 0;

  document.getElementById(id).value = v;
  return v;
}

// Updates total display on screen
function setTotal(amount) {
  document.getElementById("total").textContent =
    "$" + amount.toFixed(2);
}

// Calculates total cost of all items
function calculateTotal() {
  startTimer();

  // Get quantities
  let milk = readQty("milk");
  let bread = readQty("bread");
  let eggs = readQty("eggs");
  let rice = readQty("rice");
  let apples = readQty("apples");
  let chicken = readQty("chicken");

  // Calculate total
  let total =
    milk * PRICE_MILK +
    bread * PRICE_BREAD +
    eggs * PRICE_EGGS +
    rice * PRICE_RICE +
    apples * PRICE_APPLES +
    chicken * PRICE_CHICKEN;

  setTotal(total);

  // Show message
  if (milk + bread + eggs + rice + apples + chicken === 0) {
    document.getElementById("receipt").textContent = "Cart is empty.";
  } else {
    document.getElementById("receipt").textContent =
      "Total calculated. Click Print Receipt.";
  }
}

// Formats date/time for receipt
function formatDateTime(d) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");

  let h = d.getHours();
  const ampm = h >= 12 ? "PM" : "AM";

  h = h % 12;
  if (h === 0) h = 12;

  const hh = String(h).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd} ${hh}:${min} ${ampm}`;
}

// Prints receipt with item details
function printReceipt() {
  startTimer();

  let milk = readQty("milk");
  let bread = readQty("bread");
  let eggs = readQty("eggs");
  let rice = readQty("rice");
  let apples = readQty("apples");
  let chicken = readQty("chicken");

  // If empty cart
  if (milk + bread + eggs + rice + apples + chicken === 0) {
    setTotal(0);
    document.getElementById("receipt").textContent = "Cart is empty.";
    return;
  }

  // Calculate each item
  let milkLine = milk * PRICE_MILK;
  let breadLine = bread * PRICE_BREAD;
  let eggsLine = eggs * PRICE_EGGS;
  let riceLine = rice * PRICE_RICE;
  let applesLine = apples * PRICE_APPLES;
  let chickenLine = chicken * PRICE_CHICKEN;

  let total = milkLine + breadLine + eggsLine + riceLine + applesLine + chickenLine;
  setTotal(total);

  const now = new Date();
  const when = formatDateTime(now);

  // Build receipt text
  let text = "Green Basket Grocery\n";
  text += "Date/Time: " + when + "\n";
  text += "-----------------------------\n";

  if (milk > 0) text += "Milk x" + milk + " = $" + milkLine.toFixed(2) + "\n";
  if (bread > 0) text += "Bread x" + bread + " = $" + breadLine.toFixed(2) + "\n";
  if (eggs > 0) text += "Eggs x" + eggs + " = $" + eggsLine.toFixed(2) + "\n";
  if (rice > 0) text += "Rice x" + rice + " = $" + riceLine.toFixed(2) + "\n";
  if (apples > 0) text += "Apples x" + apples + " = $" + applesLine.toFixed(2) + "\n";
  if (chicken > 0) text += "Chicken x" + chicken + " = $" + chickenLine.toFixed(2) + "\n";

  text += "-----------------------------\n";
  text += "FINAL TOTAL: $" + total.toFixed(2) + "\n";
  text += "Thank you for shopping!\n";

  document.getElementById("receipt").textContent = text;
}

// Resets all values in cart
function resetCart(message) {
  document.getElementById("milk").value = 0;
  document.getElementById("bread").value = 0;
  document.getElementById("eggs").value = 0;
  document.getElementById("rice").value = 0;
  document.getElementById("apples").value = 0;
  document.getElementById("chicken").value = 0;

  setTotal(0);
  document.getElementById("receipt").textContent = message;

  startTimer();
}
