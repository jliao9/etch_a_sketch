//using CSS grid and CSS variables to make dynamic rows and columns 
//https://en.wikipedia.org/wiki/CSS_grid_layout
//https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);
