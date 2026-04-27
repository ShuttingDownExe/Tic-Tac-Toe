const express = require('express');
const http = require('http');
const {Server} = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const rooms = new Map();

function createRoomState() {
  return {
    board: Array(9).fill(null),
    turn: 'X',
    scores: {X: 0, O: 0},
    players: {X: null, O: null},
    winner: null,
    isDraw: false
  }
}

io.on('connection', (socket) => {
  console.log('a user connected:', socket.id);
  socket.on('createRoom', () => {
    const roomId = Math.random().toString(36).substring(2, 8);
    rooms.set(roomId, createRoomState());
    socket.emit('roomCreated', roomId);
  })

  socket.on('joinRoom', (roomId) => {
    if (!rooms.has(roomId)) {
      socket.emit('error', 'Room does not exist');
      return;
    }
    const roomState = rooms.get(roomId);
    if (roomState.players.X === null) {
      roomState.players.X = socket.id;
    } else if (roomState.players.O === null) {
      roomState.players.O = socket.id;
    } else {
      socket.emit('error', 'Room is full');
      return;
    }
    socket.join(roomId);
    io.to(roomId).emit('roomUpdate', roomState);
  });

  socket.on('makeMove', ({roomId, index}) => {
    const roomState = rooms.get(roomId);
    if (!roomState || roomState.winner || roomState.isDraw) return;

    const playerSymbol = roomState.players.X === socket.id ? 'X' :
                         roomState.players.O === socket.id ? 'O' : null;
    if (playerSymbol !== roomState.turn) return;

    if (roomState.board[index] === null) {
      roomState.board[index] = playerSymbol;
      roomState.turn = playerSymbol === 'X' ? 'O' : 'X';
      // Check for winner or draw here and update roomState.winner or roomState.isDraw
      io.to(roomId).emit('roomUpdate', roomState);
    }
  });

  socket.on('disconnect', () => {
    console.log('user disconnected:', socket.id);
    // Handle player disconnection and possibly reset the room state
  });
});

const port = 3000;

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.get('/api/game', (_, res) => {
  res.json({ message: 'Welcome to the game API!' });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});