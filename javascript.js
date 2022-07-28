//using CSS grid and CSS variables to make dynamic rows and columns 
//https://en.wikipedia.org/wiki/CSS_grid_layout
//https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "cell";

  };
};
makeRows(16, 16);

const cells = document.querySelectorAll(".cell");

//default color

cells.forEach(cell => {
   cell.addEventListener("mouseenter", () => {
     cell.style.backgroundColor = "black";
  });
  cell.addEventListener("click", () => {
    cell.style.backgroundColor = "black";
  });
   // cell.addEventListener("mouseleave", () =>{
   //   cell.style.backgroundColor = "white";
   // });
 })
 
//bw button

const bw = document.getElementById("bw");

//on user selection of custom
const custom = document.getElementById("custom");
function colorSelected() {
  custom.addEventListener("click", (element) =>{
    cells.forEach(cell =>{
      cell.addEventListener("mouseenter", () =>{
        cell.style.backgroundColor = "element.value";
      });
    });
  })
};

const eraser = document.getElementById("eraser");
function erase() {
  eraser.addEventListener("click", ()=>{
    cells.forEach(cell =>
      cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = "white";
      }))
  })
}

colorSelected();
erase();