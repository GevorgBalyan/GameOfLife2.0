LivingCreature = require("./livingCreature")

module.exports = class Fire_Guy extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.mul = 0
        this.directions = [];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        
        return super.chooseCell(character)
    }
    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
    }
}