// alert('hello');

const canvas = document.getElementById("canvas");
console.log(canvas);

let context = canvas.getContext("2d");
// context.moveTo(50, 50);
// context.lineTo(100, 100);
// context.stroke();
// context.restore();

canvas.width = 500;
canvas.height = 500;
context.strokeStyle = "red";
context.fillStyle = "green";
context.shadowBlur = 10;
context.shadowColor = "brown";
context.moveTo(250, 250);
context.rect(50, 50, 100, 100);
// context.rect(X, Y, width, height);
context.fill();
context.stroke();