const express = require("express");
const connectDB = require("./config/db");

require("colors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// * Initialize express server
const app = express();
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`.magenta);
});

// * Connect to DB
connectDB();
