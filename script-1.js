let Grass = require("./grass")
let GrassEater = require("./grassEater")
let Predator = require("./predator")
let Water = require("./water")
let Fire_Guy = require("./fireGuy")
let Fire = require("./fire")

var side = 15;
let grassArr = []
let grassEaterArr = []
let predatorArr = []
let waterArr = []
let fireGuyArr = []
let fireArr = []

function generate(matLen, gr, grEat, predatr, waterr, fireguyy, firee) {
    let matrix = []
    for (let i = 0; i < matLen; i++) {
        matrix[i] = []
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }
    for (let i = 0; i < predatr; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
    }
    for (let i = 0; i < waterr; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
    }
    for (let i = 0; i < fireguyy; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }
    }
    for (let i = 0; i < firee; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6
        }
    }
    return matrix
}


let matrix = generate(30, 10, 10, 5, 10, 1)
function setup() {
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side)
    background('#acacac')
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            }
            else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y)
                predatorArr.push(pred)
            }
            else if (matrix[y][x] == 4) {
                var waterr = new Water(x, y)
                waterArr.push(waterr)
            }
            else if (matrix[y][x] == 5) {
                var fireguyy = new Fire_Guy(x, y)
                fireGuyArr.push(fireguyy)
            }
            else if (matrix[y][x] == 6) {
                var firee = new Fire(x, y)
                fireArr.push(firee)
            }
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {

                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill('yellow');;
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill('brown');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill('blue');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill('red');
                rect(x * side, y * side, side, side);
            }
        }

    }
    for (let i in grassArr) {
        grassArr[i].mul();
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].eat()
    }
    for (let i in waterArr) {
        waterArr[i].mul()
    }
    for (let i in fireGuyArr) {
        fireGuyArr[i].move()
    }
    for (let i in firee) {
        fireArr[i].burn()
    }
}



