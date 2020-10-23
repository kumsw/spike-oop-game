class Controller {
  constructor() {
    this.player = new Player();
  }

  movePlayer(keyCode) {
    if (keyCode === 37 || keyCode === 65) {
      this.player.setCurrentLocation(-unit, 0);
    } else if (keyCode === 39 || keyCode === 68) {
      this.player.setCurrentLocation(unit, 0);
    } else if (keyCode === 38 || keyCode === 87) {
      this.player.setCurrentLocation(0, -unit);
      setTimeout(() => {
        this.player.setCurrentLocation(0, unit);
      }, 500);
      // } else if (keyCode === 40 || keyCode === 83) {
      //   this.player.setCurrentLocation(0, unit)
    }
  }
  drawPlayer() {
    this.player.drawSelf();
  }
}
