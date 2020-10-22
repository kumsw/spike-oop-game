const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
if (canvas.height > canvas.width) {
    let unit = canvas.width / 10;
} else {
    let unit = canvas.height / 10;
}
// canvas say play game
// addevent listner click on canvas
// add event listener for key presses
// ()=> {const newGaME = NEW gAME; NEWgAME.startGame}
// figure out levelLayout
// put in all heights and widths and make them proportional unit
// finish startgame()
