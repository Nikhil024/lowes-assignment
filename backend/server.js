const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./routes/router");
const bodyParser = require("body-parser");
const helmet = require("helmet");

app.use(bodyParser.json());
app.use(helmet());
app.use(router);



app.listen(process.env.SERVER_PORT, ()=> {
    console.log("Server listening on port " + process.env.SERVER_PORT);
});