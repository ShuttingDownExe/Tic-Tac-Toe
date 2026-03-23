const express = require('express');
import {Server} from "socket.io"

const app = express();
const port = 3000;

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.get('/api/game', (_, res) => {
  res.json({ message: 'Welcome to the game API!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});