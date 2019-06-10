const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  characters: Array,
  actual: Array,
  karen: Array,
  ageo: Array,
  dan: Array,
  chris: Array
});
module.exports = mongoose.model("scoreTracker", scoreSchema);
