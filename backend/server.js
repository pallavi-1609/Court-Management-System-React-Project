const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/court-management", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

// Routes
const teamRoutes = require("./routes/team");
const caseRoutes = require("./routes/cases");
const invoiceRoutes = require("./routes/invoice");
const incomeRoutes = require("./routes/income");
const appointmentRoutes = require("./routes/appointment");
const hearingRoutes = require("./routes/hearing");
const clientRoutes = require("./routes/client");

app.use("/api/team", teamRoutes);
app.use("/api/cases", caseRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/income", incomeRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/hearings", hearingRoutes);
app.use("/api/clients", clientRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
