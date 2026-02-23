const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/game', (req, res) => {
  res.json({ message: 'Welcome to the game API!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});