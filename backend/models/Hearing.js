const mongoose = require("mongoose");

const hearingSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  relatedTo: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  members: {
    type: String,
  },
  status: {
    type: String,
    required: true,
    enum: ["Completed", "Not Started", "In Progress"],
  },
  priority: {
    type: String,
    required: true,
    enum: ["low", "medium", "high", "urgent"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Hearing", hearingSchema);
