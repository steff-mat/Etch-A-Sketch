const container = document.querySelector(".container");
const grid16 = document.querySelector(".g16");
const grid32 = document.querySelector(".g32");
const grid64 = document.querySelector(".g64");
const gridCustom = document.querySelector(".g-custom");
const rainbow = document.querySelector(".rainbow-mode");
const black = document.querySelector(".black-mode");

function createDiv(gridSize) {
  if (gridSize > 100) {
    window.alert("Grid can not be bigger than 100x100");
  } else {
    for (let i = 1; i <= gridSize * gridSize; i++) {
      const div = document.createElement("div");
      container.appendChild(div);
      div.className = "grid-pixel";
      div.style.width = gridSize / 480;
      div.style.height = gridSize / 480;

      div.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "black";
      });

      rainbow.addEventListener("click", function () {
        function rainbow() {
          return Math.floor(Math.random() * 16777215).toString(16);
        }
        div.addEventListener("mouseenter", (event) => {
          event.target.style.backgroundColor = "#" + rainbow();
        });
      });

      black.addEventListener("click", function () {
        div.addEventListener("mouseenter", (event) => {
          event.target.style.backgroundColor = "black";
        });
      });
    }
    container.style.setProperty("--n", gridSize);
  }
}

grid16.addEventListener("click", function () {
  container.replaceChildren();
  createDiv(16);
  grid16.disabled = true;
  grid32.disabled = false;
  grid64.disabled = false;
  gridCustom.disabled = false;
});
grid32.addEventListener("click", function () {
  container.replaceChildren();
  createDiv(32);
  grid16.disabled = false;
  grid32.disabled = true;
  grid64.disabled = false;
  gridCustom.disabled = false;
});
grid64.addEventListener("click", function () {
  container.replaceChildren();
  createDiv(64);
  grid16.disabled = false;
  grid32.disabled = false;
  grid64.disabled = true;
  gridCustom.disabled = false;
});

gridCustom.addEventListener("click", function () {
  container.replaceChildren();
  createDiv(parseInt(prompt("Enter the size of the custom grid")));
  grid16.disabled = false;
  grid32.disabled = false;
  grid64.disabled = false;
  gridCustom.disabled = false;
});
