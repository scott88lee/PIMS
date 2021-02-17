const express = require('express');
const app = new express();
const ws_server = require('http').createServer(app);
const websocket = require('ws');

const wss =  new websocket.Server({server:ws_server})

app.get("/", (req, res) => {
    res.send("Hello world")
})

wss.on('connection', function connection(ws){
    console.log("New connection.")
    ws.send('Connected to server.')

    // setInterval(function(){
    //     ws.send('Are you still there ?')
    // },2000)

    ws.on('message', function incoming(message){
        console.log("Recieved " + message)
        ws.send('Recieved ' + message)
    })
})

ws_server.listen(3000, () => { console.log("Listen 3000.") });
app.listen(8080, () => { console.log("Listen 8080.") });