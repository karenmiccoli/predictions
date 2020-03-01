const express = require("express");
const Player = require("../models/predictions");
const router = express.Router();

router.get("/", async function(req, res, next) {
  try {
    const players = await Player.find();
    res.json({ payload: players });
  } catch (err) {
    res.status(500).json({ message: "Error in getting all players" });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const player = new Player(req.body);
    await player.save();
    res.json({
      success: true,
      message: `created ${player.name} as player`,
      payload: player
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error in posting player", error: err, success: false });
  }
});

module.exports = router;
