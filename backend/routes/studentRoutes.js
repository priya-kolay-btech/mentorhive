


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

// // ✅ Get single student by rollNumber
// router.get("/roll/:rollNumber", async (req, res) => {
//   try {
//     const student = await Student.findOne({ rollNumber: req.params.rollNumber });
//     if (!student) return res.status(404).json({ message: "Student not found" });
//     res.json(student);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });
// // ✅ Get single student by MongoDB _id
// router.get("/:id", async (req, res) => {
//   try {
//     const student = await Student.findById(req.params.id);
//     if (!student) return res.status(404).json({ message: "Student not found" });
//     res.json(student);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // ✅ Update student by rollNumber
// router.put("/roll/:rollNumber", async (req, res) => {
//   try {
//     const student = await Student.findOneAndUpdate(
//       { rollNumber: req.params.rollNumber },
//       req.body,
//       { new: true }
//     );
//     if (!student) return res.status(404).json({ message: "Student not found" });
//     res.json(student);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });
// // ✅ Update student by MongoDB _id
// router.put("/:id", async (req, res) => {
//   try {
//     const student = await Student.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!student) return res.status(404).json({ message: "Student not found" });
//     res.json(student);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });




// // routes/studentRoutes.js
// router.put("/:id/assign-mentor", async (req, res) => {
//   try {
//     const { mentorId } = req.body;
//     const student = await Student.findByIdAndUpdate(
//       req.params.id,
//       { mentor: mentorId },
//       { new: true }
//     ).populate("mentor");
//     res.json(student);
//   } catch (err) {
//     res.status(500).json({ message: "Error assigning mentor" });
//   }
// });



// router.get("/mentor/:mentorId", async (req, res) => {
//   try {
//     const students = await Student.find({ mentor: req.params.mentorId });
//     res.json(students);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching students" });
//   }
// });








// export default router;