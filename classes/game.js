class Game {
    constructor(unit) {
        this.levelLayout = [[x, y, tileType], [x, y, tileType], [], []];
        this.controller = new Controller;
        this.screen = new Screen(this.levelLayout);
        this.unit = unit;
    }
    startGame() {
        this.screen.drawLevel();
        this.controller.drawPlayer();
    }
}