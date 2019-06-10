const express = require("express");
const Character = require("../models/characters");
const router = express.Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  console.log("characters");
  try {
    const characters = await Character.find();
    res.json({ payload: characters });
    console.log(characters);
  } catch (err) {
    res.status(500).json({ message: "Error in getting all characters" });
  }
});

router.post("/", async (req, res, next) => {
  console.log("posting new character");
  try {
    const character = new Character(req.body);
    await character.save();
    res.json({
      success: true,
      message: `created ${character.name} in database`,
      payload: character
    });
  } catch (err) {
    res.status(500).json({
      message: "Error in posting character",
      error: err,
      success: false
    });
  }
});

// need to write a patch request
module.exports = router;
