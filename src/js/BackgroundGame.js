import { canvas, ctx, colorsVariable, size } from './app';

export default class BackgroundGame {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.drawSquare = function (x, y, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x * size, y * size, size, size);
    };
  }

  getBackground() {
    ctx.fillStyle = colorsVariable.colorDark;
    ctx.fillRect(this.x, this.y, this.width, this.height);

    for (let i = 0; i < 12; i += 2) {
      for (let j = 0; j < 12; j += 2) {
        this.drawSquare(i, j, colorsVariable.colorLight);
        this.drawSquare(i + 1, j + 1, colorsVariable.colorLight);
      }
    }
  }
}