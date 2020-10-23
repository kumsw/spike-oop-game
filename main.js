const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let unit;
if (canvas.height > canvas.width) {
    unit = canvas.width / 20;
} else {
    unit = canvas.height / 20;
}

// add spikes
// make it so player position returns to start when hit spike

//move up and wait a second( delay the jump)
