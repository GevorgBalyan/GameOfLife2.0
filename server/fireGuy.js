LivingCreature = require("./livingCreature")
Fire = require("./fire")

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

    spawn_fier() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 6;

            var newfire = new Fire(newX, newY);
            fireArr.push(newfire);
            this.energy = 3
        }
    }
    move() {
        this.mul++
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        var emptyCells1 = this.chooseCell(1);
        var newCell1 = random(emptyCells1);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
        if (newCell1) {
            var newX = newCell1[0];
            var newY = newCell1[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }
        else if (this.mul >= 5) {
            this.spawn_fier()
        }
    }
}