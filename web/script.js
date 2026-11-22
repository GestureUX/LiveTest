
let count = 0;

const button = document.getElementById("counterBtn");

button.addEventListener("click", () => {
  count++;
  button.textContent = `Click me: ${count}`;
});

function updateClock() {
  document.getElementById("clock").textContent =
    new Date().toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);
