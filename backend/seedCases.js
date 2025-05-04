const mongoose = require("mongoose");
const Case = require("./models/Case");

const MONGO_URI = "mongodb://localhost:27017/court-management";

const initialCases = [
  {
    title: "Case 1: Prabhu Gopinath vs. Sampath Nandi",
    description:
      "This is a civil case regarding a property dispute between John Doe and Jane Smith.",
    caseNumber: "C1",
    partiesInvolved: "Prabhu Gopinath, Sampath Nandi",
    caseType: "Civil",
    currentStatus: "Hearing Next Week",
    hearingDates: "10-04-2024",
  },
  {
    title: "Case 2: State vs. Mehtha Corporation",
    description:
      "This criminal case involves charges of fraud against XYZ Corporation filed by the state.",
    caseNumber: "C2",
    partiesInvolved: "State, Mehtha Corporation",
    caseType: "Criminal",
    currentStatus: "Pending",
    hearingDates: "20-04-2024",
  },
  {
    title: "Case 3: Mary Johnson vs. Chandra Sekahr",
    description:
      "This civil case involves a contractual dispute between Mary Johnson and David Brown regarding the sale of a property.",
    caseNumber: "C3",
    partiesInvolved: "Mary Johnson, Chandra Sekahr",
    caseType: "Civil",
    currentStatus: "Running",
    hearingDates: "Running",
  },
  {
    title: "Case 4: Semen Solutions vs. Vijetha Corporation",
    description:
      "This civil case involves a breach of contract claim filed by ABC Company against DEF Corporation.",
    caseNumber: "C4",
    partiesInvolved: "Semen Solutions, Vijetha Corporation",
    caseType: "Civil",
    currentStatus: "Hearing Next Month",
    hearingDates: "25-04-2024",
  },
  {
    title: "Case 5: Ramesh Enterprises vs. L&T Ltd.",
    description:
      "This criminal case involves charges of intellectual property theft against PQR Inc. filed by LMN Ltd.",
    caseNumber: "C5",
    partiesInvolved: "Ramesh Enterprises, L&T Ltd",
    caseType: "Civil",
    currentStatus: "Hearing Pending",
    hearingDates: "24-06-2024",
  },
];

async function seedCases() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await Case.deleteMany({});
    await Case.insertMany(initialCases);
    console.log("Case listings seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("Error seeding case listings:", err);
    process.exit(1);
  }
}

seedCases();
