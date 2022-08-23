let addBtn = document.getElementById("add-btn");
let subtractBtn = document.getElementById("subtract-btn");
let counter = document.getElementById("attendees");
let saveEl = document.getElementById("save-el");

let count = 0;

function add() {
  count += 1;
  counter.textContent = count;
}

function subtract() {
  count -= 1;
  counter.textContent = count;
  if (count === 0) {
    counter.textContent = "All attendees have left.";
    alert(
      "The event has ended. You don't have to go home, but you can't stay here."
    );
  }
}

function save() {
  let lastCount = count + ", ";
  saveEl.textContent += lastCount;
}
