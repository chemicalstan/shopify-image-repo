const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 5000;
const dbUrl = process.env.MONGO_URI;
// Initialize application
const app = express();

// DB Connection
mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected");
  })
  .catch(err => console.log(err));

// Listen
app.listen(PORT, () => {
  console.log(`Server running at port:${PORT}`);
});
