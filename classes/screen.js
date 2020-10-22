class Screen {
    constructor(levelLayout) {
        this.arrayOfTiles = levelLayout.map(this.createTile);
    }
    createTile([x, y, tileType]) {
        const tile = new Tile(x, y, tileType);
        return tile
    }
    drawLevel() {
        this.arrayOfTiles.forEach((tile) => { tile.draw() })
    }
}
