class Screen {
  constructor(levelLayout) {
    this.arrayOfTiles = arrayOfTiles;
  }
  createLevel(levelLayout) {
    const tile = new Tile(levelLayout.x, levelLayout.y, levelLayout.tileType);
  }
}
