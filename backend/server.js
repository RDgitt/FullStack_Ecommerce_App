const express = require('express');

const app = express();
require('dotenv').config();

const port = process.env.PORT || 9000; // You can choose any available port

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
