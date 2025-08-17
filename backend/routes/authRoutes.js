import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// Student login or auto-create
router.post("/login", async (req, res) => {
  const { rollNumber } = req.body;

  if (!rollNumber) {
    return res.status(400).json({ message: "Roll number is required" });
  }

  try {
    let student = await Student.findOne({ rollNumber });

    if (!student) {
      // Create new student with default values
      student = new Student({
        rollNumber,
        studentName:"",
        mentorName: "",
        parentEmail: "",
        parentPhone: "",
        parentAddress: "",
        healthIssues: "",
        extracurricular: "",
        achievements: "",
        classAttendance: 0,
        backlogs: 0,
        cgpa: 0,
        meetingsAttended: 0
      });
      await student.save();
    }

    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;



// import express from "express";
// import Student from "../models/Student.js";
// import Mentor from "../models/Mentor.js";

// const router = express.Router();

// // Role-based login or auto-create
// router.post("/login", async (req, res) => {
//   const { rollNumber, role, name, email, password } = req.body;

//   if (!rollNumber || !role) {
//     return res.status(400).json({ message: "Roll number and role are required" });
//   }

//   try {
//     if (role === "student") {
//       // Check if student exists
//       let student = await Student.findOne({ rollNumber });
//       if (!student) {
//         student = new Student({
//           rollNumber,
//           studentName: name || "",
//           mentorName: "",
//           parentEmail: "",
//           parentPhone: "",
//           parentAddress: "",
//           healthIssues: "",
//           extracurricular: "",
//           achievements: "",
//           classAttendance: 0,
//           backlogs: 0,
//           cgpa: 0,
//           meetingsAttended: 0
//         });
//         await student.save();
//       }
//       return res.json(student);

//     } else if (role === "mentor") {
//       // Check if mentor exists
//       let mentor = await Mentor.findOne({ rollNumber });
//       if (!mentor) {
//         mentor = new Mentor({
//           rollNumber,
//           mentorName: name || "",
//           email: email || "",
//           password: password || "" // consider hashing for production
//         });
//         await mentor.save();
//       }
//       return res.json(mentor);

//     } else {
//       return res.status(400).json({ message: "Invalid role" });
//     }

//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// });

// export default router;


// import express from "express";
// import Student from "../models/Student.js";
// import Mentor from "../models/Mentor.js";

// const router = express.Router();

// // Unified login route
// router.post("/login", async (req, res) => {
//   const { rollNumber, role, name, email, password } = req.body;

//   if (!rollNumber || !role) {
//     return res.status(400).json({ message: "Roll number and role are required" });
//   }

//   try {
//     if (role === "mentee") {
//       // Find or auto-create student
//       let student = await Student.findOne({ rollNumber });
//       if (!student) {
//         student = await Student.create({
//           rollNumber,
//           studentName: name || "",
//           mentorName: "",
//           parentEmail: "",
//           parentPhone: "",
//           parentAddress: "",
//           healthIssues: "",
//           extracurricular: "",
//           achievements: "",
//           classAttendance: 0,
//           backlogs: 0,
//           cgpa: 0,
//           meetingsAttended: 0,
//         });
//       }
//       return res.json({ student });

//     } else if (role === "mentor") {
//       // Find or auto-create mentor
//       let mentor = await Mentor.findOne({ rollNumber });
//       if (!mentor) {
//         mentor = await Mentor.create({
//           rollNumber,
//           mentorName: name || "",
//           email: email || "",
//           password: password || "",
//         });
//       }
//       return res.json({ mentor });

//     } else {
//       return res.status(400).json({ message: "Invalid role" });
//     }

//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }
// });

// export default router;

