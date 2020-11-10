import '../style/style.scss';
import BackgroundGame from './BackgroundGame';
import Snake from './Snake';
import Box from './Box';

export const canvas = document.getElementById('game');
export const ctx = canvas.getContext('2d');

const startGame = document.getElementById('startGame');
const scoreGame = document.getElementById('scoreGame');

export const colorsVariable = {
  colorDark: '#cddbf7',
  colorLight: '#fff',
  colorBox: '#ccc',
  colorSnake: '#000',
};

export let size = 50;
export const width = canvas.width / size;
export const height = canvas.height / size;

let background = new BackgroundGame();
let box = new Box();
let snake = new Snake(box, scoreGame);

startGame.addEventListener('click', onStartGameClick);
document.addEventListener('keydown', onKeydown);

init();

function init() {
  background.getBackground();
}

function onStartGameClick() {
  window.setInterval(() => {
    snake.clear();
    background.getBackground();
    box.drawBox();
    snake.refresh();
    snake.drawSnake();
    if (snake.getBox()) {
      box.changeLocation();
    }
    snake.getScore();
  }, 300);
}

function onKeydown(e) {
  const path = e.key.replace('Arrow', '');
  snake.changePath(path);
}

