const express = require("express");
const router = express.Router();
const Team = require("../models/Team");

// Get all team members
router.get("/", async (req, res) => {
  try {
    const teamMembers = await Team.find().populate("cases");
    res.json(teamMembers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one team member
router.get("/:id", async (req, res) => {
  try {
    const teamMember = await Team.findById(req.params.id).populate("cases");
    if (!teamMember) {
      return res.status(404).json({ message: "Team member not found" });
    }
    res.json(teamMember);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create team member
router.post("/", async (req, res) => {
  const teamMember = new Team({
    name: req.body.name,
    role: req.body.role,
    contact: {
      email: req.body.contact.email,
      phone: req.body.contact.phone,
    },
    specialization: req.body.specialization,
    availability: req.body.availability,
  });

  try {
    const newTeamMember = await teamMember.save();
    res.status(201).json(newTeamMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update team member
router.patch("/:id", async (req, res) => {
  try {
    const teamMember = await Team.findById(req.params.id);
    if (!teamMember) {
      return res.status(404).json({ message: "Team member not found" });
    }

    Object.keys(req.body).forEach((key) => {
      if (key === "contact") {
        Object.keys(req.body.contact).forEach((contactKey) => {
          teamMember.contact[contactKey] = req.body.contact[contactKey];
        });
      } else {
        teamMember[key] = req.body[key];
      }
    });

    const updatedTeamMember = await teamMember.save();
    res.json(updatedTeamMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete team member
router.delete("/:id", async (req, res) => {
  try {
    const teamMember = await Team.findById(req.params.id);
    if (!teamMember) {
      return res.status(404).json({ message: "Team member not found" });
    }

    await teamMember.remove();
    res.json({ message: "Team member deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
