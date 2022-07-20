const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./routes/router");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const mongoose = require("mongoose");


app.use(bodyParser.json());
app.use(helmet());
app.use(router);

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on("error", err => {
    console.log("Error connecting to DB " + err);
});


mongoose.connection.on("connected", () => {
    console.log("connected to DB ");
});

app.listen(process.env.SERVER_PORT, ()=> {
    console.log("Server listening on port " + process.env.SERVER_PORT);
});