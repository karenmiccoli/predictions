const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  name: String,
  house: String,
  status: String
});
module.exports = mongoose.model("character", characterSchema);
