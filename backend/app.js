const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors(
    {
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
      }
));

app.use(express.json());
// route imports
const product = require("./routes/productRoute")

app.use("/api/v1",product);

module.exports = app;