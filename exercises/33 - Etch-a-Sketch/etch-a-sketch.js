// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 50;
// Setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas.
const { width, height } = canvas;

const x = Math.floor(Math.random() * width);
const y = Math.floor(Math.random() * height);
// create random x and y starting points on the canvas

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a handler for the keys
function handleKey(e) {
        if (e.key.includes('Arrow')) {
                e.preventDefault();
                // console.log(e.key);
                draw({ key: e.key });
        }
}

function draw({ key }) {
        console.log(key);
        ctx.beginPath();
        ctx.moveTo(x, y);
}

window.addEventListener('keydown', handleKey);
