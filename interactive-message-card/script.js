// DOM selection using getElementById
var messageInput = document.getElementById("messageInput");
var showBtn = document.getElementById("showBtn");
var colorBtn = document.getElementById("colorBtn");
var addNoteBtn = document.getElementById("addNoteBtn");
var removeNoteBtn = document.getElementById("removeNoteBtn");
var resetBtn = document.getElementById("resetBtn");

var card = document.getElementById("card");
var cardMessage = document.getElementById("cardMessage");

// We keep track of the note so only one exists
var note = null;

// Part 1: Show the Message
showBtn.addEventListener("click", function () {
  // change text using textContent
  cardMessage.textContent = messageInput.value;

  // make card visible if hidden
  card.style.display = "block";
});

// Part 2: Change Card Color
colorBtn.addEventListener("click", function () {
  // style modification (background + text color)
  card.style.backgroundColor = "black";
  card.style.color = "white";
});

// Part 3: Add a Note (Dynamic Creation)
addNoteBtn.addEventListener("click", function () {
  // Only one note should exist
  if (note === null) {
    // createElement
    note = document.createElement("p");

    // add text inside it
    note.textContent = "Note: This is a dynamic note.";

    // appendChild inside the card
    card.appendChild(note);

    // make sure card is visible
    card.style.display = "block";
  }
});

// Part 4: Remove the Note (Dynamic Removal)
removeNoteBtn.addEventListener("click", function () {
  if (note !== null) {
    // remove the note element using remove
    note.remove();
    note = null;
  }
});

// Part 5: Reset Button
resetBtn.addEventListener("click", function () {
  // clear message text
  cardMessage.textContent = "";
  messageInput.value = "";

  // reset colors
  card.style.backgroundColor = "white";
  card.style.color = "black";

  // remove note if it exists
  if (note !== null) {
    note.remove();
    note = null;
  }

  // hide card again (optional but clean)
  card.style.display = "none";
});