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
  clicks: {
    type: Number,
    default: 0,
  },
});

module.exports = Mongoose.model("URLMapping", urlSchema);
