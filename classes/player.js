class Player {
    constructor() {
        this.isAlive = true;
        this.currentXLocation = x;
        this.currentYLocation = y;
    }
    setCurrentLocation([x, y]) {
        this.currentXLocation += x
        this.currentYLocation += this.currentYLocation + y
    }
}