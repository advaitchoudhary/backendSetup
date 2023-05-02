const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("../db");
const transactions = require("./routes/transactions");
dotenv.config({
  path: path.join(__dirname, "..", "..", "config", "config.env"),
});
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/api/v1/transactions", transactions);
// app.use(express.static(path.join(__dirname, "..", public)));
// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });
module.exports = app;
