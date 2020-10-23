class Controller {
  constructor() {
    this.player = new Player();
  }

  movePlayer(keyCode) {
    if (keyCode === 37 || keyCode === 65) {
      if (this.player.currentXLocation > 0.1) {
        this.player.setCurrentLocation(-unit, 0);
      }
    } else if (keyCode === 39 || keyCode === 68) {
      if (this.player.currentXLocation < 19 * unit) {
        this.player.setCurrentLocation(unit, 0);
      }
    } else if (keyCode === 38 || keyCode === 87) {
      if (this.player.currentYLocation === 8 * unit) {
        this.player.setCurrentLocation(0, -unit);
        setTimeout(() => {
          this.player.setCurrentLocation(0, unit);
        }, 500);
      }
    }
  }
  drawPlayer() {
    this.player.drawSelf();
  }
}
