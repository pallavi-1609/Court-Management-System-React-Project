const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  invoiceNo: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  paid: {
    type: Number,
    required: true,
  },
  due: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Paid", "Due"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Invoice", invoiceSchema);
