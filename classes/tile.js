class Tile {
    constructor(x, y, tileType) {
        (this.x = x), (this.y = y);
        this.tileType = tileType;
    }
    draw() {
        if (this.tileType === "ground") {
            ctx.beginPath();
            ctx.fillStyle = "brown";
            ctx.fillRect = (this.x, this.y, height, width);
        } else if (this.tileType === "spike") {
            ctx.beginPath();
            ctx.fillStyle = "grey";
            ctx.moveTo = (this.x, this.y + height);
            ctx.lineTo = (this.x + width / 2, this.y + height / 2);
            ctx.lineTo = (this.x + width, this.y + height);
        } else if (this.tileType === "sky") {
            ctx.beginPath();
            ctx.fillStyle = "blue";
            ctx.fillRect = (this.x, this.y, height, width);
        }
    }
}
