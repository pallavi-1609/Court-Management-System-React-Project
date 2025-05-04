const express = require("express");
const router = express.Router();
const Hearing = require("../models/Hearing");

// Get all hearings
router.get("/", async (req, res) => {
  try {
    const hearings = await Hearing.find().sort({ startDate: 1 });
    res.json(hearings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new hearing
router.post("/", async (req, res) => {
  const hearing = new Hearing({
    taskName: req.body.taskName,
    relatedTo: req.body.relatedTo,
    startDate: req.body.startDate,
    deadline: req.body.deadline,
    members: req.body.members,
    status: req.body.status,
    priority: req.body.priority,
  });

  try {
    const newHearing = await hearing.save();
    res.status(201).json(newHearing);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete hearing
router.delete("/:id", async (req, res) => {
  try {
    await Hearing.findByIdAndDelete(req.params.id);
    res.json({ message: "Hearing deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
