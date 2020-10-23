const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let unit = 100;
if (canvas.height > canvas.width) {
  unit = canvas.width / 10;
} else {
  unit = canvas.height / 10;
}

// figure out levelLayout
// put in all heights and widths and make them proportional unit

// finish startgame()

// canvas say play game
// addevent listner click on canvas
// add event listener for key presses
// ()=> {const newGaME = NEW gAME; NEWgAME.startGame}

// every time player movers the page needs to be refreshed and the plaers and tiles 'redrawn'
