class Tile {
  constructor(x, y, tileType) {
    (this.x = x), (this.y = y);
    this.tileType = tileType;
  }
  draw() {
    let xUnit = this.x * unit;
    let yUnit = this.y * unit;
    if (this.tileType === "ground") {
      ctx.beginPath();
      ctx.fillStyle = "brown";
      ctx.fillRect = (xUnit, yUnit, unit, unit);
    } else if (this.tileType === "spike") {
      ctx.beginPath();
      ctx.fillStyle = "grey";
      ctx.moveTo = (xUnit, yUnit + unit);
      ctx.lineTo = (xUnit + unit / 2, yUnit + unit / 2);
      ctx.lineTo = (xUnit + unit, yUnit + unit);
    } else if (this.tileType === "sky") {
      ctx.beginPath();
      ctx.fillStyle = "blue";
      ctx.fillRect = (xUnit, yUnit, unit, unit);
    }
  }
}
