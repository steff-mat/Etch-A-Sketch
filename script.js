const container = document.querySelector(".container");
const grid16 = document.querySelector(".g16");
const grid32 = document.querySelector(".g32");
const grid64 = document.querySelector(".g64");
const grid128 = document.querySelector(".g128");

function createDiv(gridSize) {
  for (let i = 1; i <= gridSize * gridSize; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.className = "grid-pixel";
    div.style.width = gridSize / 480;
    div.style.height = gridSize / 480;
  }
  container.style.setProperty("--n", gridSize);
}

grid16.addEventListener("click", function () {
  createDiv(16);
});
grid32.addEventListener("click", function () {
  createDiv(32);
});
grid64.addEventListener("click", function () {
  createDiv(64);
});
