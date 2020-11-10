import { ctx, colorsVariable, size, width, height } from './app';

export default class Box {
  constructor() {
    this.x = 100;
    this.y = 100;
  }

  changeLocation() {
    this.x = Math.floor((Math.random() * width + 1)) * size;
    this.y = Math.floor((Math.random() * height + 1)) * size;
  }

  drawBox() {
    ctx.fillStyle = colorsVariable.colorBox;
    ctx.fillRect(this.x, this.y, size, size);
  }
}