var socket = io()

grassStat = document.getElementById("grass")
grassEatStat = document.getElementById("grassEater")
predatorStat = document.getElementById("predator")
waterStat = document.getElementById('water')
fireGuyStat = document.getElementById("fireGuy")
fireStat = document.getElementById("fire")

let matirxSize = 600
socket.on("matrix", handleMatrix)

season = "summer"


function handleMatrix(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {


            if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * matirxSize / matrix.length, y * matirxSize / matrix.length, matirxSize / matrix.length, matirxSize / matrix.length);
            }
            else if (matrix[y][x] == 1 && season == "summer") {
                fill("green");
                rect(x * matirxSize / matrix.length, y * matirxSize / matrix.length, matirxSize / matrix.length, matirxSize / matrix.length);
            }
            else if (matrix[y][x] == 1 && season == "autumn") {
                fill("#84fc03");
                rect(x * matirxSize / matrix.length, y * matirxSize / matrix.length, matirxSize / matrix.length, matirxSize / matrix.length);
            }
            else if (matrix[y][x] == 1 && season == "spring") {
                fill("#03fc39");
                rect(x * matirxSize / matrix.length, y * matirxSize / matrix.length, matirxSize / matrix.length, matirxSize / matrix.length);
            }
            else if (matrix[y][x] == 1 && season == "winter") {
                fill("##92f0b9");
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
            else if (matrix[y][x] == 4 && season == 'summer') {
                fill('blue');
                rect(x * matirxSize / matrix.length, y * matirxSize / matrix.length, matirxSize / matrix.length, matirxSize / matrix.length);
            }
            else if (matrix[y][x] == 4 && season == 'winter') {
                fill('#ade0f7');
                rect(x * matirxSize / matrix.length, y * matirxSize / matrix.length, matirxSize / matrix.length, matirxSize / matrix.length);
            } else if (matrix[y][x] == 4) {
                fill('#2a95c7');
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



function handleInfo(info) {

    info = JSON.parse(info)
    grassStat.innerText = "Grass - " + info.grass;
    grassEatStat.innerText = "GrassEater - " + info.grassEater;
    predatorStat.innerText = "Predator - " + info.predator;
    waterStat.innerText = "Water - " + info.water;
    fireGuyStat.innerText = "FileGuy - " + info.fireGuy;
    fireStat.innerText = "Fire - " + info.fire;

}

socket.on('stat', handleInfo)

function statistic() {
    socket.emit("get", "get")
}

function sendsummer() {
    season = "summer"
    socket.emit('season', 'summer')
}
function sendAutumn() {
    season = 'autumn'
    socket.emit('season', 'autumn')
}
function sendWinter() {
    season = 'winter'
    socket.emit('season', 'winter')
}
function sendspring() {
    season = 'spring'
    socket.emit('season', 'spring')
}




but = document.getElementById('stats')

but.addEventListener('click', statistic)
seaSumbut = document.getElementById('summer')
seaSumbut.addEventListener('click', sendsummer)
seaAut = document.getElementById('autumn')
seaAut.addEventListener('click', sendAutumn)
seaWin = document.getElementById('winter')
seaWin.addEventListener('click', sendWinter)
seaSpr = document.getElementById('spring')
seaSpr.addEventListener('click', sendspring)



