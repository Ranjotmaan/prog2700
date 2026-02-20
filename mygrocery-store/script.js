// Prices stored in an object (allowed: array or object)
const items = [
  { name: "Milk", price: 3.49, inputId: "qty-milk" },
  { name: "Bread", price: 2.99, inputId: "qty-bread" },
  { name: "Eggs", price: 4.25, inputId: "qty-eggs" },
  { name: "Rice", price: 6.50, inputId: "qty-rice" },
  { name: "Apples", price: 1.20, inputId: "qty-apples" },
  { name: "Chicken", price: 9.99, inputId: "qty-chicken" }
];

const totalEl = document.getElementById("total");
const receiptEl = document.getElementById("receipt");

const btnCalc = document.getElementById("btn-calc");
const btnReceipt = document.getElementById("btn-receipt");
const btnReset = document.getElementById("btn-reset");

// Inactivity timer (15 seconds for testing)
let inactivityTimerId = null;

function resetInactivityTimer() {
  if (inactivityTimerId !== null) {
    clearTimeout(inactivityTimerId);
  }

  inactivityTimerId = setTimeout(() => {
    receiptEl.textContent = "Cart reset due to inactivity.";
    clearAllInputs();
    totalEl.textContent = "$0.00";
  }, 15000);
}

function getQuantity(inputId) {
  const input = document.getElementById(inputId);
  const raw = input.value;

  // If empty, treat as 0
  if (raw === "" || raw === null) return 0;

  let qty = Number(raw);

  // Quantity must not be negative
  if (isNaN(qty) || qty < 0) {
    qty = 0;
    input.value = "0";
  }

  return qty;
}

function calculateTotal() {
  resetInactivityTimer();

  let total = 0;
  let allZero = true;

  for (const item of items) {
    const qty = getQuantity(item.inputId);
    if (qty > 0) allZero = false;

    const lineTotal = item.price * qty;
    total += lineTotal;
  }

  if (allZero) {
    receiptEl.textContent = "Cart is empty.";
    totalEl.textContent = "$0.00";
    return 0;
  }

  totalEl.textContent = "$" + total.toFixed(2);
  return total;
}

function formatDateTime(dateObj) {
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");

  let hours = dateObj.getHours();
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  if (hours === 0) hours = 12;

  const hh = String(hours).padStart(2, "0");

  // Example format: 2026-02-08 08:15 PM
  return `${year}-${month}-${day} ${hh}:${minutes} ${ampm}`;
}

function printReceipt() {
  resetInactivityTimer();

  let total = 0;
  let allZero = true;

  const now = new Date();
  const dateTimeStr = formatDateTime(now);

  let lines = "";
  lines += "Simple Grocery Store\n";
  lines += "Date/Time: " + dateTimeStr + "\n";
  lines += "--------------------------\n";

  for (const item of items) {
    const qty = getQuantity(item.inputId);

    if (qty > 0) allZero = false;

    const lineTotal = item.price * qty;
    total += lineTotal;

    if (qty > 0) {
      lines += `${item.name} x${qty} = $${lineTotal.toFixed(2)}\n`;
    }
  }

  if (allZero) {
    receiptEl.textContent = "Cart is empty.";
    totalEl.textContent = "$0.00";
    return;
  }

  lines += "--------------------------\n";
  lines += "Final Total: $" + total.toFixed(2) + "\n";

  receiptEl.textContent = lines;
  totalEl.textContent = "$" + total.toFixed(2);
}

function clearAllInputs() {
  for (const item of items) {
    const input = document.getElementById(item.inputId);
    input.value = "";
  }
}

function resetCart() {
  resetInactivityTimer();
  clearAllInputs();
  totalEl.textContent = "$0.00";
  receiptEl.textContent = "";
}

// Event listeners
btnCalc.addEventListener("click", calculateTotal);
btnReceipt.addEventListener("click", printReceipt);
btnReset.addEventListener("click", resetCart);

// Changing any quantity input resets the timer
for (const item of items) {
  const input = document.getElementById(item.inputId);
  input.addEventListener("input", resetInactivityTimer);
}

// Start timer when page loads
resetInactivityTimer();