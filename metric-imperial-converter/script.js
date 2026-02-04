const valueInput = document.getElementById("value");
const typeSelect = document.getElementById("type");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", function () {
  const input = valueInput.value;
  const num = Number(input);

  if (input.trim() === "" || isNaN(num)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  let converted;
  let text = "";

  if (typeSelect.value === "cToF") {
    converted = (num * 9/5) + 32;
    text = `${num} °C = ${converted.toFixed(2)} °F`;
  } 
  else if (typeSelect.value === "kmToMi") {
    converted = num * 0.621371;
    text = `${num} km = ${converted.toFixed(2)} miles`;
  } 
  else if (typeSelect.value === "mToFt") {
    converted = num * 3.28084;
    text = `${num} m = ${converted.toFixed(2)} feet`;
  } 
  else if (typeSelect.value === "kgToLb") {
    converted = num * 2.20462;
    text = `${num} kg = ${converted.toFixed(2)} pounds`;
  }

  result.textContent = text;
});
