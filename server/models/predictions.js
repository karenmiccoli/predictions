const mongoose = require("mongoose");

const predictionsSchema = new mongoose.Schema({
  name: String,
  house: String,
  houseUrl: String,
  predictions: Array,
  pregnant: Boolean,
  whoKillsKing: String,
  whoEndsUpOnThrone: String,
  score: Number
});
module.exports = mongoose.model("playerPrediction", predictionsSchema);
