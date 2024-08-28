document.addEventListener('keydown', handleKeyPress);

const ball = document.getElementById('ball');
let position = 0;

function handleKeyPress(e) {
  if (e.code === 'ArrowLeft') {
    position = position - 10;
  }

  if (e.code === 'ArrowRight') {
    position = position + 10;
  }

  if (position < 0) {
    position = 0;
  }

  refresh();
}

function refresh() {
  ball.style.left = position + 'px';
}