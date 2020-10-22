class Screen {
    constructor(levelLayout) {
        this.arrayOfTiles = levelLayout.map(this.createTile);
    }
    createTile(array) {
        const tile = new Tile(array[0], array[1], array[2]);
        return tile
    }
    drawLevel() {
        this.arrayOfTiles.forEach((tile) => { tile.draw() })
    }
}
