const express = require("express");
const router = express.Router();
const Client = require("../models/Client");

// Get all clients
router.get("/", async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new client
router.post("/", async (req, res) => {
  const client = new Client({
    name: req.body.name,
    mobile: req.body.mobile,
    cases: req.body.cases,
    status: req.body.status,
    caseDetails: req.body.caseDetails,
  });

  try {
    const newClient = await client.save();
    res.status(201).json(newClient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update client status
router.patch("/:id/status", async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }
    client.status = !client.status;
    const updatedClient = await client.save();
    res.json(updatedClient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete client
router.delete("/:id", async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.json({ message: "Client deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
