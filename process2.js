const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Process 2!',
    port: PORT,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Process 2 running on http://localhost:${PORT}`);
});