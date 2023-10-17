LivingCreature = require("./livingCreature")

module.exports = class Fire extends LivingCreature{
    constructor(x, y) {
        super(x,y,index)
        this.energy = 3
    }
    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character)
    }
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 6;

            var newFire = new Fire(newX, newY);
            fireArr.push(newFire);
            this.energy = 3
        }
    }
    burn() {
        frameRate(3)
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);
        var emptyCells1 = this.chooseCell(4);
        var newCell1 = random(emptyCells1);
        if (newCell1) {
            this.die()
        }
        if (newCell) {
            this.energy += 2
            var newX = newCell[0];
            var newY = newCell[1];
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
        if (this.energy >= 5) {
            this.mul()
        }
        else if (this.energy >= 0) {
            this.energy--
            console.log(this.energy);
        }
        else if (this.energy <= 0) {
            this.die()
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in fireArr) {
            if (this.x == fireArr[i].x && this.y == fireArr[i].y) {
                fireArr.splice(i, 1);
                break;
            }
        }
    }
}