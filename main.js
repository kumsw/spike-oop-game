const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath();
ctx.fillStyle = "black";
// ctx.lineWidth = 5;
// ctx.fillRect(100, 100, 100, 100);
ctx.moveTo(100, 200);
ctx.lineTo(150, 150);
ctx.lineTo(200, 200);
ctx.fill();
ctx.stroke();
