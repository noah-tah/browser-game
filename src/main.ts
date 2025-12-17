import './style.css'

const container = document.querySelector<HTMLDivElement>('#app');
const canvas = document.createElement('canvas');
canvas.width = 720;
canvas.height = 540;
container?.appendChild(canvas);

const ctx = canvas.getContext('2d');

const UNIT_SIZE = 20

function toPx(units: number): number {
  return units * UNIT_SIZE
}

function drawARectangle() {
  if (!ctx) return;
  ctx.beginPath();
  ctx.fillStyle = 'blue';
  ctx.fillRect(toPx(18), toPx(14), toPx(1), toPx(1));
}

function drawBorderAroundCanvas() {
  if (!ctx || !canvas) return;
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
}


function gameLoop() {
  drawBackground();
  drawBorderAroundCanvas();
  drawARectangle();
  requestAnimationFrame(gameLoop);
}

gameLoop();

addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'w':
      console.log('Move up');
      break;
    case 'a':
      console.log('Move left');
      break;
    case 's':
      console.log('Move down');
      break;
    case 'd':
      console.log('Move right');
      break;
  }
})

function drawBackground() {
  if (!ctx) return;
  ctx.fillStyle = 'lightgrey';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}


