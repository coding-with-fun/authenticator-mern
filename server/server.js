const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

require("colors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// * Initialize express server
const app = express();
app.use(express.json());
app.use(cors());
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`.magenta);
});

// * Connect to DB
connectDB();

// * Defining routes
app.use("/", require("./routes/home.api"));
app.use("/verify", require("./routes/auth.api"));
app.use("/user", require("./routes/user.api"));
