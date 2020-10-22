class Controller {
    constructor() {
        this.player = new Player();
    }

    movePlayer(key) {
        if (key === leftKey) {
            this.player.setCurrentLocation(-x, 0);
        } else if (key === rightKey) {
            this.player.setCurrentLocation(x, 0);
        } else if (key === upKey) {
            this.player.setCurrentLocation(0, -y);
        } else if (key === downKey) {
            this.player.setCurrentLocation(0, y);
        }
    }
    drawPlayer() {
        this.player.drawSelf();
    }
}
