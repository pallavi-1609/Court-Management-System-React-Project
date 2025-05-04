const mongoose = require("mongoose");
const Appointment = require("./models/Appointment");

const MONGO_URI = "mongodb://localhost:27017/court-management";

const initialAppointments = [
  {
    clientName: "Rajesh Kumar",
    appointmentDate: "2024-04-16",
    appointmentTime: "10:00",
  },
  {
    clientName: "Priya Patel",
    appointmentDate: "2024-04-17",
    appointmentTime: "11:30",
  },
  {
    clientName: "Amit Singh",
    appointmentDate: "2024-04-18",
    appointmentTime: "14:00",
  },
  {
    clientName: "Neha Sharma",
    appointmentDate: "2024-04-19",
    appointmentTime: "15:30",
  },
  {
    clientName: "Suresh Menon",
    appointmentDate: "2024-04-20",
    appointmentTime: "09:30",
  },
  {
    clientName: "Anita Gupta",
    appointmentDate: "2024-04-21",
    appointmentTime: "12:00",
  },
  {
    clientName: "Sanjay Verma",
    appointmentDate: "2024-04-22",
    appointmentTime: "16:00",
  },
  {
    clientName: "Deepak Tiwari",
    appointmentDate: "2024-04-23",
    appointmentTime: "10:30",
  },
  {
    clientName: "Kavita Singhania",
    appointmentDate: "2024-04-24",
    appointmentTime: "14:30",
  },
  {
    clientName: "Rahul Sharma",
    appointmentDate: "2024-04-25",
    appointmentTime: "11:00",
  },
];

async function seedAppointments() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await Appointment.deleteMany({});
    await Appointment.insertMany(initialAppointments);
    console.log("Appointments seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("Error seeding appointments:", err);
    process.exit(1);
  }
}

seedAppointments();
