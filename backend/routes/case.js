const express = require("express");
const router = express.Router();
const Case = require("../models/Case");

// Get all cases
router.get("/", async (req, res) => {
  try {
    const cases = await Case.find().populate("assignedTo");
    res.json(cases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one case
router.get("/:id", async (req, res) => {
  try {
    const caseItem = await Case.findById(req.params.id).populate("assignedTo");
    if (!caseItem) {
      return res.status(404).json({ message: "Case not found" });
    }
    res.json(caseItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create case
router.post("/", async (req, res) => {
  const caseItem = new Case({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    priority: req.body.priority,
    assignedTo: req.body.assignedTo,
    client: {
      name: req.body.client.name,
      contact: req.body.client.contact,
    },
    documents: req.body.documents || [],
    notes: req.body.notes || [],
  });

  try {
    const newCase = await caseItem.save();
    res.status(201).json(newCase);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update case
router.patch("/:id", async (req, res) => {
  try {
    const caseItem = await Case.findById(req.params.id);
    if (!caseItem) {
      return res.status(404).json({ message: "Case not found" });
    }

    Object.keys(req.body).forEach((key) => {
      if (key === "client") {
        Object.keys(req.body.client).forEach((clientKey) => {
          caseItem.client[clientKey] = req.body.client[clientKey];
        });
      } else {
        caseItem[key] = req.body[key];
      }
    });

    const updatedCase = await caseItem.save();
    res.json(updatedCase);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete case
router.delete("/:id", async (req, res) => {
  try {
    const caseItem = await Case.findById(req.params.id);
    if (!caseItem) {
      return res.status(404).json({ message: "Case not found" });
    }

    await caseItem.remove();
    res.json({ message: "Case deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
