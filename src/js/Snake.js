import { canvas, ctx, colorsVariable, size } from './app';

export default class Snake {
  constructor(box, scoreGame) {
    this.box = box;
    this.x = 0;
    this.y = 0;
    this.xQuickness = size;
    this.yQuickness = 0;
    this.score = 0;
    this.scoreGame = scoreGame;
    this.snakeTail = [];
  }

  drawSnake() {
    ctx.fillStyle = colorsVariable.colorSnake;

    for (let i = 0; i < this.snakeTail.length; i++) {
      ctx.fillRect(this.snakeTail[i].x, this.snakeTail[i].y, size, size);
    }
  }

  refresh() {
    for (let i = 0; i < this.snakeTail.length; i++) {
      this.snakeTail[i] = this.snakeTail[i + 1];
      console.log(this.snakeTail[i + 1]);
    }

    this.snakeTail[this.score] = {
      x: this.x,
      y: this.y
    };

    this.x += this.xQuickness;
    this.y += this.yQuickness;

    switch (true) {
      case this.x > canvas.width - size:
        this.x = 0;
        break;
      case this.y > canvas.height - size:
        this.y = 0;
        break;
      case this.x < 0:
        this.x = canvas.width - size;
        break;
      case this.y < 0:
        this.y = canvas.height - size;
        break;
    }
  }

  changePath(path) {
    switch (path) {
      case 'Up':
        this.xQuickness = 0;
        this.yQuickness = -size;
        break;
      case 'Down':
        this.xQuickness = 0;
        this.yQuickness = size;
        break;
      case 'Left':
        this.xQuickness = -size;
        this.yQuickness = 0;
        break;
      case 'Right':
        this.xQuickness = size;
        this.yQuickness = 0;
        break;
    }
  }

  getBox() {
    if (this.x === this.box.x && this.y === this.box.y) {
      this.score++;
      this.snakeTail.push({
        x: this.x,
        y: this.y,
      });
      return true;
    }
    return false;
  }

  getScore() {
    this.scoreGame.innerHTML = this.score;
  }

  clear() {
    ctx.clearRect(this.x, this.y, size, size);
  }
}