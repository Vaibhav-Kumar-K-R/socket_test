const express = require('express');
const app = express();
const http = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(http);

app.use(express.static('public')); // Serves index.html

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
  // Simple echo to test both emit and receive
  socket.on('test-event', (msg) => {
    console.log('Received from client:', msg);
    socket.emit('test-reply', `Hello from server, you said ahwllo !!!!!!!!!!: ${msg}`);
  });
});

const PORT = 3000;
http.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
