var socket = io()

socket.on("name", handlInfo)

function handlInfo(esim){
    console.log(esim);
    
}