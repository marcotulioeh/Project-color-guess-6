const rgbColor = document.getElementById('rgb-color');

function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function textRgb() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  rgbColor.innerHTML = `(${red}, ${green}, ${blue})`;
}

textRgb();

const colorAdi = document.getElementById('color-Adi');

function createDiv() {
  for (let i = 0; i < 6; i += 1) {
    const createBall = document.createElement('div');
    createBall.className = 'ball';
    colorAdi.appendChild(createBall);
  }
}

createDiv();

const selectBalls = document.querySelectorAll('.ball');

function colorBall() {
  for (let i = 0; i < selectBalls.length; i += 1) {
    selectBalls[i].style.background = randomColor();
  }
}

colorBall();

function matchColorWithBall() {
  selectBalls[Math.floor(Math.random() * 6)].style.backgroundColor = `rgb${rgbColor.innerText}`;
}

matchColorWithBall();

const answer = document.getElementById('answer');

const scoreGet = document.getElementById('score');

answer.innerText = 'Escolha uma cor';

function acertRgb(click) {
  if (click.target.style.backgroundColor === `rgb${rgbColor.innerText}`) {
    answer.innerText = 'Acertou!';
    // scoreGet.innerText += 3;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

for (let i = 0; i < selectBalls.length; i += 1) {
  selectBalls[i].addEventListener('click', acertRgb);
}

function resetGame() {
  answer.innerText = 'Escolha uma cor';
}

function score(click) {
  let scoreToNumber = parseInt(scoreGet.innerText, 10);
  if (click.target.style.backgroundColor === `rgb${rgbColor.innerText}`) {
    scoreToNumber += 3;
  }
  scoreGet.innerText = scoreToNumber;
}

for (let i = 0; i < selectBalls.length; i += 1) {
  selectBalls[i].addEventListener('click', score);
}

const btn = document.getElementById('reset-game');
btn.addEventListener('click', resetGame);
btn.addEventListener('click', textRgb);
btn.addEventListener('click', colorBall);
btn.addEventListener('click', matchColorWithBall);
