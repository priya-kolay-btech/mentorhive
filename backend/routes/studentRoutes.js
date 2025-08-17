


// // import express from "express";
// // import Student from "../models/Student.js";

// // const router = express.Router();

// // /**
// //  * @route   POST /api/students/login
// //  * @desc    Student login or auto-create if not exists
// //  */
// // router.post("/login", async (req, res) => {
// //   const { rollNumber } = req.body;

// //   if (!rollNumber) {
// //     return res.status(400).json({ message: "Roll number is required" });
// //   }

// //   try {
// //     let student = await Student.findOne({ rollNumber });

// //     if (!student) {
// //       // Create a new student with default values
// //       student = new Student({
// //         rollNumber,
// //         studentName:"",
// //         mentorName: "",
// //         parentEmail: "",
// //         parentPhone: "",
// //         parentAddress: "",
// //         healthIssues: "",
// //         extracurricular: "",
// //         achievements: "",
// //         classAttendance: 0,
// //         backlogs: 0,
// //         cgpa: 0,
// //         meetingsAttended: 0
// //       });
// //       await student.save();
// //     }

// //     res.json({student});
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // /**
// //  * @route   GET /api/students
// //  * @desc    Get all students
// //  */
// // router.get("/", async (req, res) => {
// //   try {
// //     const students = await Student.find();
// //     res.json(students);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // /**
// //  * @route   GET /api/students/:rollNumber
// //  * @desc    Get a student by roll number
// //  */
// // router.get("/:rollNumber", async (req, res) => {
// //   try {
// //     const student = await Student.findOne({ rollNumber: req.params.rollNumber });
// //     if (!student) return res.status(404).json({ message: "Student not found" });
// //     res.json(student);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // /**
// //  * @route   PUT /api/students/:rollNumber
// //  * @desc    Update student info
// //  */
// // router.put("/:rollNumber", async (req, res) => {
// //   try {
// //     const student = await Student.findOneAndUpdate(
// //       { rollNumber: req.params.rollNumber },
// //       { $set: req.body }, // ✅ Only update sent fields
// //       { new: true, runValidators: false } // ✅ Skip validation for missing fields
// //     );

// //     if (!student) return res.status(404).json({ message: "Student not found" });

// //     // Emit real-time update if using Socket.io
// //     const io = req.app.get("io");
// //     if (io) io.emit("studentUpdated", student);

// //     res.json(student);
// //   } catch (err) {
// //     console.error("Update error:", err);
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // export default router;


// import express from "express";
// import Student from "../models/Student.js"; // your student schema
// const router = express.Router();

// router.post("/login", async (req, res) => {
//   try {
//     const { rollNumber, password, role } = req.body;

//     // Extra safety: only allow 'mentee' role here
//     if (role !== "mentee") {
//       return res.status(400).json({ message: "Invalid role for this route" });
//     }

//     // Check if student exists
//     let student = await Student.findOne({ rollNumber });

//     if (!student) {
//       // If not found, create a new student
//       student = await Student.create({ rollNumber });
//     }

//     res.json(student);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// export default router;



// import express from "express";
// import Student from "../models/Student.js";

// const router = express.Router();

// // ✅ Get all students
// router.get("/", async (req, res) => {
//   try {
//     const students = await Student.find();
//     res.json(students);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // ✅ Get single student by ID
// router.get("/:id", async (req, res) => {
//   try {
//     const student = await Student.findById(req.params.id);
//     if (!student) return res.status(404).json({ message: "Student not found" });
//     res.json(student);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// export default router;


import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// ✅ Get all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Get single student by rollNumber
router.get("/roll/:rollNumber", async (req, res) => {
  try {
    const student = await Student.findOne({ rollNumber: req.params.rollNumber });
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
// ✅ Get single student by MongoDB _id
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Update student by rollNumber
router.put("/roll/:rollNumber", async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate(
      { rollNumber: req.params.rollNumber },
      req.body,
      { new: true }
    );
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
// ✅ Update student by MongoDB _id
router.put("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});





export default router;
