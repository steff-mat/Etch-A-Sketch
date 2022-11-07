// const gridContainer = document.querySelector(".container");
// const newDiv = document.createElement("div");
// const gridBoxes = document.querySelectorAll("div");

// function divCreator(noOfDivs) {
//   for (i = 0; i < noOfDivs; i++) {
//     gridContainer.appendChild(document.createElement("div"));
//     for (const box of gridContainer.children) {
//       box.classList.add("grid-box");
//     }
//   }
// }

// divCreator(parseInt(prompt("Enter no. of x by x")));

const gridContainer = document.querySelector(".container");
const newSketch = document.querySelector(".new-sketch");
let gridBoxSize;
newSketch.addEventListener("click", function () {
  gridBoxSize = parseInt(prompt("Enter the no. of gridboxes: (max. 100)"));
  gridCreator(gridBoxSize);
});

function gridCreator(gridBoxSize) {
  for (i = 0; i < gridBoxSize; i++) {
    gridContainer.appendChild(document.createElement("div"));
    for (const box of gridContainer.children) {
      box.classList.add("grid-box");
    }
  }
}
