fs = require('fs')

var socket = io()

let matirxSize = 600
socket.on("matrix", handleMatrix)

function handleMatrix(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {


            if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * matirxSize / matrix.length, y * matirxSize / matrix.length, matirxSize / matrix.length, matirxSize / matrix.length);
            }
            else if (matrix[y][x] == 1) {
                fill("green");
                rect(x * matirxSize / matrix.length, y * matirxSize / matrix.length, matirxSize / matrix.length, matirxSize / matrix.length);
            }
            else if (matrix[y][x] == 2) {
                fill('yellow');;
                rect(x * matirxSize / matrix.length, y * matirxSize / matrix.length, matirxSize / matrix.length, matirxSize / matrix.length);
            }
            else if (matrix[y][x] == 3) {
                fill('brown');
                rect(x * matirxSize / matrix.length, y * matirxSize / matrix.length, matirxSize / matrix.length, matirxSize / matrix.length);
            }
            else if (matrix[y][x] == 4) {
                fill('blue');
                rect(x * matirxSize / matrix.length, y * matirxSize / matrix.length, matirxSize / matrix.length, matirxSize / matrix.length);
            }
            else if (matrix[y][x] == 5) {
                fill('red');
                rect(x * matirxSize / matrix.length, y * matirxSize / matrix.length, matirxSize / matrix.length, matirxSize / matrix.length);
            }
            else if (matrix[y][x] == 6) {
                fill('orange')
                rect(x * matirxSize / matrix.length, y * matirxSize / matrix.length, matirxSize / matrix.length, matirxSize / matrix.length);
            }
        }
    }

}


function setup() {
    createCanvas(matirxSize, matirxSize)
    background('#acacac')
}


function statistic() {
    socket.emit("get", "get")
}


let but = document.getElementById('stats')
console.log(but)
but.addEventListener('click', statistic)


socket.on('stat', handleInfo)

function handleInfo(info) {
    info = JSON.parse(info)
    
    
}

grassStat = document.getElementById("grass")
grassEatStat = document.getElementById("grassEater")
predatorStat = document.getElementById("predator")
waterStat = document.getElementById('water')
fireGuyStat = document.getElementById("fireGuy")
fireStat = document.getElementById("fire")



