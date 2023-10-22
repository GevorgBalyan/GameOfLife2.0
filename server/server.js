random = require("./random")

var express = require("express");
var app = express();

let Grass = require("./grass.js")
let GrassEater = require("./grassEater.js")
let Predator = require("./predator.js")
let Water = require("./water.js")
let Fire_Guy = require("./fireGuy.js")
let Fire = require("./fire.js")

grassArr = []
grassEaterArr = []
predatorArr = []
waterArr = []
fireGuyArr = []
fireArr = []

var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("../client"));
app.get("/", function (req, res) {
    res.redirect("index-1.html");
});
server.listen(3000, function () {
    console.log("Example is running on port 3000");
});




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
matrix = generate(30, 10, 10, 5, 10, 1, 20)




function createOBJ() {
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
createOBJ()

function start() {
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
    for (let i in fireArr) {
        fireArr[i].burn()
    }

    io.sockets.emit("matrix", matrix);

}
setInterval(start, 100)

// io.on('connection', function (socket) {
//     socket.emit("matrix", matrix);
// });

// console.log(matrix)