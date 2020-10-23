class Player {
  constructor() {
    this.isAlive = true;
    this.currentXLocation = 0;
    this.currentYLocation = 8 * unit;
  }
  setCurrentLocation(x, y) {
    //shorthand
    this.currentXLocation += x;
    //does same thing
    this.currentYLocation = this.currentYLocation + y;
  }
  drawSelf() {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(this.currentXLocation, this.currentYLocation, unit, unit);
  }
}
