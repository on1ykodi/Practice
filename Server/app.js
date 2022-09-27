const express = require('express');
const app = express();
const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
});

const { PORT, DATABASE } = require('./config.js');

const DB = require('./db/DB');
const db = new DB(DATABASE);

io.on('connection', async (socket) => {

    socket.on('signUp', async (data) => {
        const { username, email } = data;
        db.signUp(username, email)
        socket.emit('signUpNotification');
    })

});

app.use(express.static('public'));

server.listen(PORT);

function deinitModules() {
    db.destructor();
    setTimeout(() => process.exit(), 500);
}

process.on('SIGINT', deinitModules);
