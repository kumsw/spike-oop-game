class Game {
  constructor() {
    this.levelLayout = this.makeLevelLayout();
    this.controller = new Controller();
    this.screen = new Screen(this.levelLayout);
  }
  startGame() {
    this.screen.drawLevel();
    this.controller.drawPlayer();
  }
  makeLevelLayout() {
    let array = [];
    for (let i = 0; i < 20; i++) {
      array.push([i, 9, "ground"]);
      array.push([i, 8, "sky"]);
      array.push([i, 7, "sky"]);
      array.push([i, 6, "sky"]);
      array.push([i, 5, "sky"]);
      array.push([i, 4, "sky"]);
      array.push([i, 3, "sky"]);
      array.push([i, 2, "sky"]);
    }
    array.push([Math.floor(Math.random() * 6 + 1), 8, "spike"]);
    array.push([Math.floor(Math.random() * 6 + 7), 8, "spike"]);
    array.push([Math.floor(Math.random() * 6 + 13), 8, "spike"]);

    return array;
  }

  playerMoves(event) {
    this.controller.movePlayer(event.keyCode);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.startGame();
  }
}

let newGame = new Game();
newGame.makeLevelLayout();
newGame.startGame();

document.addEventListener("keydown", (event) => {
  newGame.playerMoves(event);
});
