
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "cell";

  };
};


let i = document.querySelector('input'),
    o = document.querySelector('output');

o.innerHTML = i.value;

// use 'change' instead to see the difference in response
i.addEventListener('input', function () {
  o.innerHTML = i.value;
  makeRows(i.value,i.value);
}, false);

makeRows(i.value,i.value);

const cells = document.querySelectorAll(".cell");


cells.forEach(cell => {
   cell.addEventListener("mouseleave", () => {
     cell.style.backgroundColor = "black";
  });
  cell.addEventListener("click", () => {
    cell.style.backgroundColor = "black";
  });

 })



const bw = document.getElementById("bw");
function blackWhite() {
  bw.addEventListener("click", ()=>{
    cells.forEach(cell => {
      cell.addEventListener("mouseleave", () => {
        const shades = [
          "grey",
          "dimgray",
          "whitesmoke",
          "lightgray",
          "silver",
          "black",
          "gainsboro"
        ]
       randomShade = Math.floor(Math.random()*shades.length);
        cell.style.backgroundColor =`${shades[randomShade]}`;
    });
      })
  })
}

const eraser = document.getElementById("eraser");
function erase() {
  eraser.addEventListener("click", ()=>{
    cells.forEach(cell =>
      cell.addEventListener("mouseleave", () => {
        cell.style.backgroundColor = "white";
      }))
  })
}


const rainbow = document.getElementById("rainbow");
function random(){
  rainbow.addEventListener("click", () => {
    cells.forEach(cell =>{
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      cell.addEventListener("mouseleave", () => {
        cell.style.backgroundColor = `#${randomColor}`;
      });
      cell.addEventListener("click", () =>{
        cell.style.backgroundColor = `#${randomColor}`;
      });
    });
  });
};


const pickr = Pickr.create({
  el: '.color-picker',
  theme: 'classic', 
  
  swatches: [
      'rgba(244, 67, 54, 1)',
      'rgba(233, 30, 99, 0.95)',
      'rgba(156, 39, 176, 0.9)',
      'rgba(103, 58, 183, 0.85)',
      'rgba(63, 81, 181, 0.8)',
      'rgba(33, 150, 243, 0.75)',
      'rgba(3, 169, 244, 0.7)',
      'rgba(0, 188, 212, 0.7)',
      'rgba(0, 150, 136, 0.75)',
      'rgba(76, 175, 80, 0.8)',
      'rgba(139, 195, 74, 0.85)',
      'rgba(205, 220, 57, 0.9)',
      'rgba(255, 235, 59, 0.95)',
      'rgba(255, 193, 7, 1)'
  ],

  components: {

      // Main components
      preview: true,
      opacity: true,
      hue: true,

      // Input / output Options
      interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          hsva: true,
          cmyk: true,
          input: true,
      }
  }
});

pickr.on("change", (color, instance) =>{
  const customColor = color.toRGBA().toString();
  cells.forEach(cell => {
    cell.addEventListener("mouseleave", () => {
      cell.style.backgroundColor =customColor;
    })
  })
});

random();
blackWhite();
erase();