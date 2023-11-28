const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});

let username = '';

function setUsername() {
    username = document.getElementById('username-input').value;
    document.getElementById('username-container').style.display = 'none';
    document.getElementById('chat-container').style.display = 'block';
}

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    if (message.trim() !== '') {
        io.emit('chat message', { username, message });
        messageInput.value = '';
    }
}

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', (msg) => {
        const messages = document.getElementById('messages');
        const messageElement = document.createElement('div');
        messageElement.textContent = `${msg.username}: ${msg.message}`;
        messages.appendChild(messageElement);

        io.emit('chat message', msg);
    });
});


function sendImage() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
            io.emit('chat message', { username, message: reader.result, isImage: true });
            fileInput.value = '';
        };

        reader.readAsDataURL(file);
    }
}


// Update the message display block in app.js
socket.on('chat message', (msg) => {
    const messages = document.getElementById('messages');
    const messageElement = document.createElement('div');

    if (msg.isImage) {
        const imageElement = document.createElement('img');
        imageElement.src = msg.message;
        messageElement.appendChild(imageElement);
    } else {
        messageElement.textContent = `${msg.username}: ${msg.message}`;
    }

    messages.appendChild(messageElement);
});
