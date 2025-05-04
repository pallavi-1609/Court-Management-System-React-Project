const express = require("express");
const router = express.Router();
const Case = require("../models/Case");

// Get all cases
router.get("/", async (req, res) => {
  try {
    const cases = await Case.find();
    res.json(cases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new case
router.post("/", async (req, res) => {
  const caseData = new Case({
    title: req.body.title,
    description: req.body.description,
    caseNumber: req.body.caseNumber,
    partiesInvolved: req.body.partiesInvolved,
    caseType: req.body.caseType,
    currentStatus: req.body.currentStatus,
    hearingDates: req.body.hearingDates,
  });

  try {
    const newCase = await caseData.save();
    res.status(201).json(newCase);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a case
router.delete("/:id", async (req, res) => {
  try {
    const deletedCase = await Case.findByIdAndDelete(req.params.id);
    if (!deletedCase) {
      return res.status(404).json({ message: "Case not found" });
    }
    res.json({ message: "Case deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
