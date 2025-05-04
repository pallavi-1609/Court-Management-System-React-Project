const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  contact: {
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  specialization: {
    type: String,
    required: true,
  },
  availability: {
    type: Boolean,
    default: true,
  },
  cases: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Case",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Team", teamSchema);
