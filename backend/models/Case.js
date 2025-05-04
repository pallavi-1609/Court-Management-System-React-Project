const mongoose = require("mongoose");

const CaseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  caseNumber: { type: String, required: true },
  partiesInvolved: { type: String, required: true },
  caseType: { type: String, required: true },
  currentStatus: { type: String, required: true },
  hearingDates: { type: String, required: true },
});

module.exports = mongoose.model("Case", CaseSchema);
