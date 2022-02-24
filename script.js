function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}

const colorAdi = document.getElementById('color-Adi');

function createDiv() {
  for (let i = 0; i < 6; i += 1) {
    const createBall = document.createElement('div');
    createBall.className = 'ball';
    colorAdi.appendChild(createBall);
  }
}

createDiv();

const divBall = document.querySelectorAll('.ball');

function colorBall() {
  for (let i = 0; i < divBall.length; i += 1) {
    divBall[i].style.background = randomColor();
  }
}

colorBall();
