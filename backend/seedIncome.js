const mongoose = require("mongoose");
const Income = require("./models/Income");

const MONGO_URI = "mongodb://localhost:27017/court-management";

const initialIncome = [
  {
    name: "Rahul Sharma",
    amount: 1500.0,
    status: "paid",
    actions: ["Divorce Case", "Criminal Case", "Property Dispute"],
  },
  {
    name: "Priya Desai",
    amount: 2000.0,
    status: "due",
    actions: ["Family Dispute", "Corporate Fraud", "Intellectual Property"],
  },
  {
    name: "Vikram Malhotra",
    amount: 3000.0,
    status: "paid",
    actions: ["Financial Fraud", "Personal Injury", "Real Estate Litigation"],
  },
  {
    name: "Kriti Sanon",
    amount: 2500.0,
    status: "due",
    actions: ["Employment Dispute", "Insurance Claims", "Consumer Rights"],
  },
  {
    name: "Varun Sharma",
    amount: 1800.0,
    status: "paid",
    actions: ["Immigration Issues", "Bankruptcy Cases", "Contract Disputes"],
  },
  {
    name: "Parineeti Chopra",
    amount: 2200.0,
    status: "due",
    actions: ["Environmental Law", "Maritime Law", "Medical Malpractice"],
  },
  {
    name: "Rajkummar Rao",
    amount: 2700.0,
    status: "paid",
    actions: ["Product Liability", "Securities Law", "Tax Law"],
  },
  {
    name: "Radhika Apte",
    amount: 1900.0,
    status: "due",
    actions: ["White-Collar Crimes", "Wills & Trusts", "Wrongful Death"],
  },
  {
    name: "Shruti Haasan",
    amount: 3100.0,
    status: "paid",
    actions: ["International Law", "Entertainment Law", "Education Law"],
  },
  {
    name: "Aditya Roy Kapur",
    amount: 2600.0,
    status: "due",
    actions: ["Banking Law", "Constitutional Law", "Environmental Law"],
  },
];

async function seedIncome() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await Income.deleteMany({});
    await Income.insertMany(initialIncome);
    console.log("Income entries seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("Error seeding income entries:", err);
    process.exit(1);
  }
}

seedIncome();
