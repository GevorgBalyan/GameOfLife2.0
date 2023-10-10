LivingCreature = require("./livingCreature")    

module.exports = class Predator extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 30
        this.directions = [];
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
            matrix[newY][newX] = 3;

            var newPredator = new Predator(newX, newY);
            predatorArr.push(newPredator);
            this.energy = 15
        }
    }
    move() {
        this.energy--
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
        else {
            this.die()
        }
    }

    eat() {
        var emptyCells = this.chooseCell(2);
        var newCell = random(emptyCells);
        var emptyCells1 = this.chooseCell(1);
        var newCell1 = random(emptyCells1);
        if (newCell && this.energy >= 0) {
            this.energy += 5
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
        }
        if (newCell1 && this.energy > 0) {
            this.energy--
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
        else if (this.energy >= 33) {
            this.mul()
        }
        else {
            this.move()
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }
}