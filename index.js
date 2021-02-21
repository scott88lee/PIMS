const express = require('express');
const app = new express();
app.use(express.static('public'));

const ws_server = require('http').createServer(app);
const websocket = require('ws');

const wss =  new websocket.Server({server:ws_server})

app.get("*", (req, res) => {
    res.redirect("/index.html");
})

wss.on('connection', function connection(ws){
    console.log("New connection.")
    ws.send('Connected to server.')

    // setInterval(function(){
    //     ws.send('Are you still there ?')
    // },2000)

    ws.on('message', function incoming(message){
        
        let msg = JSON.parse(message)
        console.log(msg)
        // console.log(message.auth)

        if (msg.auth) {
            ws.send('This is a verified message from the server')
        }
    })
})

ws_server.listen(3000, () => { console.log("WebSockets PORT: 3000.") });
app.listen(8080, () => { console.log("HTTP PORT: 8080.") });