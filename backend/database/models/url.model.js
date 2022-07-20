const Mongoose = require("mongoose");

const urlSchema = Mongoose.Schema({
 id: {
    type: String,
 },
 originURL: {
    type: String,
    require: true,
 },
 shortURL: {
    type: String,
 },
 userClicks: {
    type: Number,
 }
});

module.exports = Mongoose.model("URLMapping", urlSchema);