const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const products = require('./products')
const port = process.env.PORT || 9000; // You can choose any available port

app.use(express.json());
app.use(cors());

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/products", (req, res) => {
  res.send(products);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
