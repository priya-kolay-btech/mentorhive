
// // routes/mentorRoutes.js
// import express from "express";
// import Mentor from "../models/Mentor.js";

// const router = express.Router();

// // ✅ Login route
// router.post("/login", async (req, res) => {
//   const { rollNumber, password } = req.body;

//   try {
//     const mentor = await Mentor.findOne({ rollNumber });

//     if (!mentor) {
//       return res.status(400).json({ message: "Mentor not found" });
//     }

//     // check password (for now plain text, in prod use bcrypt)
//     if (mentor.password !== password) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     res.json({
//       message: "Login successful",
//       user: {
//         _id: mentor._id,
//         rollNumber: mentor.rollNumber,
//         mentorName: mentor.mentorName, // field in schema
//         email: mentor.email,
//       },
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ✅ Seed route (for testing)
// router.post("/seed", async (req, res) => {
//   try {
//     const mentor = new Mentor({
//       rollNumber: "645345",
//       password: "12345", // plain for test only
//       mentorName: "Test Mentor", // must match schema field!
//       email: "testmentor@example.com",
//     });

//     await mentor.save();
//     res.json({ message: "Mentor seeded successfully", mentor });
//   } catch (error) {
//     res.status(500).json({ message: "Error seeding mentor", error });
//   }
// });

// export default router;




import express from "express";
import Mentor from "../models/Mentor.js"; // your mentor schema
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { employeeId, password, role } = req.body;

    // Extra safety: only allow 'mentor' role here
    if (role !== "mentor") {
      return res.status(400).json({ message: "Invalid role for this route" });
    }

    // Check if mentor exists
    let mentor = await Mentor.findOne({ employeeId });

    if (!mentor) {
      // If not found, create a new mentor
      mentor = await Mentor.create({ employeeId });
    }

    res.json(mentor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;



