class Controller {
  constructor() {
    this.player = new Player();
  }

  movePlayer(keyCode) {
    if (keyCode === 37) {
      this.player.setCurrentLocation(-unit, 0);
    } else if (keyCode === 39) {
      this.player.setCurrentLocation(unit, 0);
    } else if (keyCode === 38) {
      this.player.setCurrentLocation(0, -unit);
    } else if (keyCode === 40) {
      this.player.setCurrentLocation(0, unit);
    }
  }
  drawPlayer() {
    this.player.drawSelf();
  }
}
