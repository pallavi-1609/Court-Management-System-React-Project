const mongoose = require("mongoose");
const Client = require("./models/Client");

const sampleClients = [
  {
    name: "Janardhan",
    mobile: "8913603293",
    cases: 2,
    status: true,
    caseDetails: ["Case 1: Breach of Contract", "Case 2: Personal Injury"],
  },
  {
    name: "Jacky Hussain",
    mobile: "9876543210",
    cases: 1,
    status: false,
    caseDetails: ["Case 1: Divorce Settlement"],
  },
  {
    name: "Minnal Murali",
    mobile: "7237927399",
    cases: 3,
    status: true,
    caseDetails: [
      "Case 1: Property Dispute",
      "Case 2: Intellectual Property",
      "Case 3: Tax Litigation",
    ],
  },
  {
    name: "Sanjay Saahu",
    mobile: "9398319356",
    cases: 2,
    status: false,
    caseDetails: [
      "Case 1: Employment Discrimination",
      "Case 2: Wrongful Termination",
    ],
  },
  {
    name: "Ramana",
    mobile: "9128891277",
    cases: 1,
    status: true,
    caseDetails: ["Case 1: Corporate Merger and Acquisition"],
  },
  {
    name: "Sreeleela",
    mobile: "9849306636",
    cases: 2,
    status: false,
    caseDetails: ["Case 1: Criminal Defense", "Case 2: DUI/DWI"],
  },
  {
    name: "Vikram Rathode",
    mobile: "9782472039",
    cases: 3,
    status: true,
    caseDetails: [
      "Case 1: Medical Malpractice",
      "Case 2: Product Liability",
      "Case 3: Personal Injury",
    ],
  },
  {
    name: "Olivia Martinez",
    mobile: "6297943830",
    cases: 1,
    status: false,
    caseDetails: ["Case 1: Family Law"],
  },
  {
    name: "Bellamkonda Ramesh",
    mobile: "7737430499",
    cases: 2,
    status: true,
    caseDetails: [
      "Case 1: Real Estate Law",
      "Case 2: Landlord-Tenant Disputes",
    ],
  },
  {
    name: "Bellamkonda Suresh",
    mobile: "8793983409",
    cases: 3,
    status: false,
    caseDetails: [
      "Case 1: Immigration Law",
      "Case 2: Naturalization",
      "Case 3: Deportation Defense",
    ],
  },
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://localhost:27017/court-management", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Clear existing clients
    await Client.deleteMany({});
    console.log("Cleared existing clients");

    // Insert sample clients
    await Client.insertMany(sampleClients);
    console.log("Inserted sample clients");

    // Close the connection
    await mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
