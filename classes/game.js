class Game {
    constructor(controller) {
        this.levelLayout = [[x, y, tileType], [x, y, tileType], [], []];
        this.controller = controller;
        this.screen = new Screen(this.levelLayout);
    }
    startGame() {

    }
}