const express = require("express");
const router = express.Router();
const Invoice = require("../models/Invoice");

// Get all invoices
router.get("/", async (req, res) => {
  try {
    const invoices = await Invoice.find().sort({ createdAt: -1 });
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new invoice
router.post("/", async (req, res) => {
  const invoice = new Invoice({
    invoiceNo: req.body.invoiceNo,
    clientName: req.body.clientName,
    total: req.body.total,
    paid: req.body.paid,
    due: req.body.due,
    status: req.body.status,
  });

  try {
    const newInvoice = await invoice.save();
    res.status(201).json(newInvoice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete invoice
router.delete("/:id", async (req, res) => {
  try {
    await Invoice.findByIdAndDelete(req.params.id);
    res.json({ message: "Invoice deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
