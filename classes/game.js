class Game {
  constructor() {
    this.levelLayout = [
      [3, 7, "sky"],
      [5, 6, "ground"],
      [4, 9, "spike"],
    ];
    // this.controller = new Controller();
    this.screen = new Screen(this.levelLayout);
  }
  startGame() {
    this.screen.drawLevel();
    // this.controller.drawPlayer();
  }
}

let newGame = new Game();
newGame.startGame();
