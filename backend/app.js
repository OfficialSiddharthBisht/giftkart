const express = require("express");
const app = express();
const cors = require("cors");

cors({
    // origin : "http://127.0.0.1:3000",
    origin : "*",
})

app.use(express.json());
// route imports
const product = require("./routes/productRoute")

app.use("/api/v1",product);

module.exports = app;