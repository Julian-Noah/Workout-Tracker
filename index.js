let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let exerciseInput = document.getElementById("exercise-input");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let exercise = exerciseInput.value || "Unbekannt";
  let countStr = exercise + ": " + count + " Wdh. | ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

function reset() {
  count = 0;
  countEl.textContent = 0;
  saveEl.textContent = "Deine Sets: ";
}
