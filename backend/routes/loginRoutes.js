


// // // // // // // // import express from "express";
// // // // // // // // import Student from "../models/Student.js";
// // // // // // // // import Mentor from "../models/Mentor.js";

// // // // // // // // const router = express.Router();

// // // // // // // // // POST /api/login
// // // // // // // // router.post("/", async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     const { rollNumber, role, name } = req.body;

// // // // // // // //     if (!rollNumber || !role) {
// // // // // // // //       return res.status(400).json({ message: "Roll number and role are required" });
// // // // // // // //     }

// // // // // // // //     if (role === "mentee") {
// // // // // // // //       let student = await Student.findOne({ rollNumber });
// // // // // // // //       if (!student) student = await Student.create({ rollNumber, studentName: name || "" });
// // // // // // // //       return res.json({ student });
// // // // // // // //     }

// // // // // // // //     if (role === "mentor") {
// // // // // // // //       let mentor = await Mentor.findOne({ rollNumber });
// // // // // // // //       if (!mentor) mentor = await Mentor.create({ rollNumber, mentorName: name || "" });
// // // // // // // //       return res.json({ mentor });
// // // // // // // //     }

// // // // // // // //     return res.status(400).json({ message: "Invalid role" });
// // // // // // // //   } catch (err) {
// // // // // // // //     console.error("Login route error:", err);
// // // // // // // //     return res.status(500).json({ message: "Server error: " + err.message });
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // export default router;


// // // // // // // import express from "express";
// // // // // // // import Student from "../models/Student.js";
// // // // // // // import Mentor from "../models/Mentor.js";

// // // // // // // const router = express.Router();

// // // // // // // // POST /api/login
// // // // // // // router.post("/", async (req, res) => {
// // // // // // //   try {
// // // // // // //     const { rollNumber, role, name } = req.body;

// // // // // // //     if (!rollNumber || !role) {
// // // // // // //       return res.status(400).json({ message: "Roll number and role are required" });
// // // // // // //     }

// // // // // // //     if (role === "mentee") {
// // // // // // //       let student = await Student.findOne({ rollNumber });
// // // // // // //       if (!student) {
// // // // // // //         student = await Student.create({ rollNumber, studentName: name || "" });
// // // // // // //       }
// // // // // // //       return res.json({ student });
// // // // // // //     }

// // // // // // //     if (role === "mentor") {
// // // // // // //       let mentor = await Mentor.findOne({ rollNumber });
// // // // // // //       if (!mentor) {
// // // // // // //         mentor = await Mentor.create({ rollNumber, mentorName: name || "" });
// // // // // // //       }
// // // // // // //       return res.json({ mentor });
// // // // // // //     }

// // // // // // //     return res.status(400).json({ message: "Invalid role" });
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Login route error:", err);
// // // // // // //     return res.status(500).json({ message: "Server error: " + err.message });
// // // // // // //   }
// // // // // // // });

// // // // // // // export default router;


// // // // // // // routes/loginRoutes.js
// // // // // // const express = require("express");
// // // // // // const router = express.Router();
// // // // // // const Student = require("../models/Student");
// // // // // // const Mentor = require("../models/Mentor");

// // // // // // // Login route
// // // // // // router.post("/", async (req, res) => {
// // // // // //   try {
// // // // // //     const { rollNumber, role } = req.body;

// // // // // //     if (role === "mentor") {
// // // // // //       const mentor = await Mentor.findOne({ rollNumber: rollNumber });
// // // // // //       if (!mentor) return res.status(404).json({ message: "Mentor not found" });
// // // // // //       return res.json({ mentor });
// // // // // //     } else {
// // // // // //       const student = await Student.findOne({ rollNumber: rollNumber });
// // // // // //       if (!student) return res.status(404).json({ message: "Student not found" });
// // // // // //       return res.json({ student });
// // // // // //     }
// // // // // //   } catch (err) {
// // // // // //     console.error("Login error:", err);
// // // // // //     res.status(500).json({ message: "Server error" });
// // // // // //   }
// // // // // // });

// // // // // // module.exports = router;


// // // // // // routes/loginRoutes.js
// // // // // import express from "express";
// // // // // import Student from "../models/Student.js";
// // // // // import Mentor from "../models/Mentor.js";

// // // // // const router = express.Router();

// // // // // // Login route
// // // // // router.post("/", async (req, res) => {
// // // // //   try {
// // // // //     const { rollNumber, role } = req.body;

// // // // //     if (role === "mentor") {
// // // // //       const mentor = await Mentor.findOne({ rollNumber });
// // // // //       if (!mentor) {
// // // // //         return res.status(404).json({ message: "Mentor not found" });
// // // // //       }
// // // // //       return res.json({ mentor });
// // // // //     } else {
// // // // //       const student = await Student.findOne({ rollNumber });
// // // // //       if (!student) {
// // // // //         return res.status(404).json({ message: "Student not found" });
// // // // //       }
// // // // //       return res.json({ student });
// // // // //     }
// // // // //   } catch (err) {
// // // // //     console.error("Login error:", err);
// // // // //     res.status(500).json({ message: "Server error" });
// // // // //   }
// // // // // });

// // // // // export default router;

// // // // // routes/loginRoutes.js
// // // // import express from "express";
// // // // import Student from "../models/Student.js";
// // // // import Mentor from "../models/Mentor.js";

// // // // const router = express.Router();

// // // // // Unified login route
// // // // router.post("/", async (req, res) => {
// // // //   const { rollNumber, role, name, email, password } = req.body;

// // // //   if (!rollNumber || !role) {
// // // //     return res.status(400).json({ message: "Roll number and role are required" });
// // // //   }

// // // //   try {
// // // //     if (role === "mentee") {
// // // //       // Find or auto-create student
// // // //       let student = await Student.findOne({ rollNumber });
// // // //       if (!student) {
// // // //         student = await Student.create({
// // // //           rollNumber,
// // // //           studentName: name || "",
// // // //           mentorName: "",
// // // //           parentEmail: "",
// // // //           parentPhone: "",
// // // //           parentAddress: "",
// // // //           healthIssues: "",
// // // //           extracurricular: "",
// // // //           achievements: "",
// // // //           classAttendance: 0,
// // // //           backlogs: 0,
// // // //           cgpa: 0,
// // // //           meetingsAttended: 0,
// // // //         });
// // // //       }
// // // //       return res.json({ role: "mentee", student });

// // // //     } else if (role === "mentor") {
// // // //       // Find or auto-create mentor
// // // //       let mentor = await Mentor.findOne({ rollNumber });
// // // //       if (!mentor) {
// // // //         mentor = await Mentor.create({
// // // //           rollNumber,
// // // //           mentorName: name || "",
// // // //           email: email || "",
// // // //           password: password || "",
// // // //         });
// // // //       }
// // // //       return res.json({ role: "mentor", mentor });

// // // //     } else {
// // // //       return res.status(400).json({ message: "Invalid role" });
// // // //     }
// // // //   } catch (err) {
// // // //     console.error("❌ Login error:", err);
// // // //     return res.status(500).json({ message: "Server error" });
// // // //   }
// // // // });

// // // // export default router;


// // // import express from "express";
// // // import Student from "../models/Student.js";
// // // import Mentor from "../models/Mentor.js";

// // // const router = express.Router();

// // // // POST /api/login
// // // router.post("/", async (req, res) => {
// // //   const { rollNumber, role, name, email, password } = req.body;

// // //   if (!rollNumber || !role) {
// // //     return res.status(400).json({ message: "Roll number and role are required" });
// // //   }

// // //   try {
// // //     if (role === "mentee") {
// // //       let student = await Student.findOne({ rollNumber });
// // //       if (!student) {
// // //         // auto create new student
// // //         student = await Student.create({
// // //           rollNumber,
// // //           studentName: name || "",
// // //         });
// // //       }
// // //       return res.json({ role: "mentee", student });
// // //     }

// // //     if (role === "mentor") {
// // //       let mentor = await Mentor.findOne({ rollNumber });
// // //       if (!mentor) {
// // //         // auto create new mentor
// // //         mentor = await Mentor.create({
// // //           rollNumber,
// // //           mentorName: name || "",
// // //           email: email || "",
// // //           password: password || "",
// // //         });
// // //       }
// // //       return res.json({ role: "mentor", mentor });
// // //     }

// // //     return res.status(400).json({ message: "Invalid role" });
// // //   } catch (err) {
// // //     console.error("❌ Login error:", err);
// // //     res.status(500).json({ message: "Server error" });
// // //   }
// // // });

// // // export default router;


// // // routes/loginRoutes.js
// // import express from "express";
// // import Student from "../models/Student.js";
// // import Mentor from "../models/Mentor.js";

// // const router = express.Router();

// // router.post("/", async (req, res) => {
// //   console.log("📥 Login request received:", req.body);
// //   const { rollNumber, role, name, email, password } = req.body;

// //   if (!rollNumber || !role) {
// //     return res.status(400).json({ message: "Roll number and role required" });
// //   }

// //   try {
// //     if (role === "mentee") {
// //       let student = await Student.findOne({ rollNumber });
// //       if (!student) {
// //         student = await Student.create({
// //           rollNumber,
// //           studentName: name || "",
// //         });
// //         console.log("✅ New student created:", student.rollNumber);
// //       } else {
// //         console.log("🔑 Existing student logged in:", student.rollNumber);
// //       }

// //       return res.json({ role: "mentee", student });

// //     } else if (role === "mentor") {
// //       let mentor = await Mentor.findOne({ rollNumber });
// //       if (!mentor) {
// //         mentor = await Mentor.create({
// //           rollNumber,
// //           mentorName: name || "",
// //           email: email || "",
// //           password: password || "",
// //         });
// //         console.log("✅ New mentor created:", mentor.rollNumber);
// //       } else {
// //         console.log("🔑 Existing mentor logged in:", mentor.rollNumber);
// //       }

// //       return res.json({ role: "mentor", mentor });
// //     }

// //     res.status(400).json({ message: "Invalid role" });
// //   } catch (err) {
// //     console.error("❌ Login error:", err);
// //     res.status(500).json({ message: "Server error" });
// //   }
// // });

// // export default router;


// import express from "express";
// import Student from "../models/Student.js";
// import Mentor from "../models/Mentor.js"; // assuming you have this model
// const router = express.Router();

// router.post("/", async (req, res) => {
//   try {
//     const { rollNumber, role } = req.body;

//     if (role === "mentee") {
//       // Mentee login
//       let student = await Student.findOne({ rollNumber });
//       if (!student) {
//         student = await Student.create({ rollNumber });
//       }
//       return res.json({
//         role: "mentee",
//         student: student
//       });

//     } else if (role === "mentor") {
//       // Mentor login
//       let mentor = await Mentor.findOne({ rollNumber });
//       if (!mentor) {
//         mentor = await Mentor.create({ rollNumber });
//       }
//       return res.json({
//         role: "mentor",
//         mentor: mentor
//       });

//     } else {
//       return res.status(400).json({ message: "Invalid role" });
//     }

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });











// export default router;



import express from "express";
import Student from "../models/Student.js";
import Mentor from "../models/Mentor.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { rollNumber, role } = req.body;
  console.log("Login request:", req.body); // Debug log

  try {
    if (role === "mentee") {
      let student = await Student.findOne({ rollNumber });
      if (!student) {
        student = await Student.create({ rollNumber });
      }
      return res.json({ role: "mentee", student });
    } else if (role === "mentor") {
      let mentor = await Mentor.findOne({ rollNumber });
      if (!mentor) {
        mentor = await Mentor.create({ rollNumber });
      }
      return res.json({ role: "mentor", mentor });
    } else {
      return res.status(400).json({ message: "Invalid role" });
    }
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
