LivingCreature = require("./livingCreature")
Grass = require("./grass")

module.exports = class Water extends LivingCreature{
    constructor(x, y) {
        super(x,y)
    }
   
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY);
            grassArr.push(newGrass);
        }
    }
}