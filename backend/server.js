const express = require("express");
const app = express();

require("dotenv").config();
const cors = require("cors");

app.use(cors());

const connectDB = require("./config/db");

connectDB();

app.use(express.json());

const tripRoutes = require("./routes/tripRoutes");

app.get("/", (req, res) => {
  res.send("Route cost calculator API");
});

app.use("/api/trips", tripRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});