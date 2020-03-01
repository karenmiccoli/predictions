const express = require("express");
const Player = require("../models/score");
const router = express.Router();

router.get("/", async function(req, res, next) {
  try {
    const predictions = await Player.find();
    res.json({ payload: predictions });
  } catch (err) {
    res.status(500).json({ message: "Error in getting all predictions" });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const prediction = new Player(req.body);
    await prediction.save();
    res.json({
      success: true,
      message: `created ${prediction.name} as player`,
      payload: prediction
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error in posting player", error: err, success: false });
  }
});

module.exports = router;
