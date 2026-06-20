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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});