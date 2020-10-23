class Game {
  constructor() {
    this.levelLayout = this.makeLevelLayout();
    this.controller = new Controller();
    this.screen = new Screen(this.levelLayout);
  }
  killPlayer() {
    this.levelLayout.forEach(([x, y, tileType]) => {
      console.log(x, y, tileType);
      if (
        tileType === "spike" &&
        this.controller.player.currentXLocation === x * unit &&
        this.controller.player.currentYLocation === y * unit
      ) {
        console.log("spike");
        this.controller.player.currentXLocation = 0;
        this.controller.player.currentYLocation = 8 * unit;
      }
    });
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

  refreshScreen() {
    this.killPlayer();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.startGame();
  }
  playerMoves(event) {
    this.controller.movePlayer(event.keyCode);
    this.refreshScreen();
  }
}

let newGame = new Game();
newGame.makeLevelLayout();
newGame.startGame();

setInterval(newGame.refreshScreen.bind(newGame), 50);

document.addEventListener("keydown", (event) => {
  newGame.playerMoves(event);
});
