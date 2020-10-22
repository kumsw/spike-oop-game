class Player {
    constructor() {
        this.isAlive = true;
        this.currentXLocation = x;
        this.currentYLocation = y;
    }
    setCurrentLocation([x, y]) {
        //shorthand
        this.currentXLocation += x
        //does same thing
        this.currentYLocation = this.currentYLocation + y
    }
    drawSelf() {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect = (this.currentXLocation, this.currentYLocation, height, width);
    }
}