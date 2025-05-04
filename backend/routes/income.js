const express = require("express");
const router = express.Router();
const Income = require("../models/Income");

// Get all income entries
router.get("/", async (req, res) => {
  try {
    const incomes = await Income.find().sort({ createdAt: -1 });
    res.json(incomes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new income entry
router.post("/", async (req, res) => {
  const income = new Income({
    name: req.body.name,
    amount: req.body.amount,
    status: req.body.status,
    actions: req.body.actions,
  });

  try {
    const newIncome = await income.save();
    res.status(201).json(newIncome);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete income entry
router.delete("/:id", async (req, res) => {
  try {
    await Income.findByIdAndDelete(req.params.id);
    res.json({ message: "Income entry deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
