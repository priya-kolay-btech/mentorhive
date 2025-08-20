


import express from "express";
import LeaveApplication from "../models/LeaveApplication.js";

const router = express.Router();

/**
 * @route   POST /api/leave
 * @desc    Submit Leave (Mentee)
 */
router.post("/", async (req, res) => {
  try {
    const { menteeId, menteeName, reason, fromDate, toDate } = req.body;

    if (!menteeId?.trim() || !menteeName?.trim() || !reason?.trim() || !fromDate || !toDate) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const leave = new LeaveApplication({
      menteeId: menteeId.trim(),
      menteeName: menteeName.trim(),
      reason: reason.trim(),
      fromDate: new Date(fromDate),
      toDate: new Date(toDate),
      status: "Pending"
    });

    await leave.save();
    res.status(201).json({ message: "Leave application submitted successfully", leave });
  } catch (error) {
    console.error("Error submitting leave:", error);
    res.status(500).json({ message: "Server error while submitting leave" });
  }
});

/**
 * @route   GET /api/leave
 * @desc    Get all leaves (Mentor)
 */
router.get("/", async (req, res) => {
  try {
    const leaves = await LeaveApplication.find().sort({ createdAt: -1 });
    res.status(200).json(leaves);
  } catch (error) {
    console.error("Error fetching leaves:", error);
    res.status(500).json({ message: "Server error while fetching leaves" });
  }
});

/**
 * @route   PUT /api/leave/:id
 * @desc    Approve/Reject Leave (Mentor)
 */
router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;

    if (!["Approved", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Status must be 'Approved' or 'Rejected'" });
    }

    const leave = await LeaveApplication.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!leave) {
      return res.status(404).json({ message: "Leave application not found" });
    }


 // 🔹 Emit real-time update to all clients
    req.io.emit("leaveStatusUpdated", leave);


    res.json({ message: `Leave ${status.toLowerCase()} successfully`, leave });
  } catch (error) {
    console.error("Error updating leave status:", error);
    res.status(500).json({ message: "Server error while updating leave status" });
  }
});

export default router;






// import express from "express";
// import LeaveApplication from "../models/LeaveApplication.js";

// const router = express.Router();

// /**
//  * @route   POST /api/leave
//  * @desc    Submit Leave (Mentee)
//  */
// router.post("/", async (req, res) => {
//   try {
//     const { menteeId,mentorId, menteeName, reason, fromDate, toDate } = req.body;

//     if (!menteeId?.trim() ||   !mentorId?.trim() ||  !menteeName?.trim() || !reason?.trim() || !fromDate || !toDate) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const leave = new LeaveApplication({
//       menteeId: menteeId.trim(),
//       mentorId: mentorId.trim(), 
//       menteeName: menteeName.trim(),
//       reason: reason.trim(),
//       fromDate: new Date(fromDate),
//       toDate: new Date(toDate),
//       status: "Pending"
//     });

//     await leave.save();
//     res.status(201).json({ message: "Leave application submitted successfully", leave });
//   } catch (error) {
//     console.error("Error submitting leave:", error);
//     res.status(500).json({ message: "Server error while submitting leave" });
//   }
// });

// /**
//  * @route   GET /api/leave
//  * @desc    Get all leaves (Mentor)
//  */
// router.get("/", async (req, res) => {
//   try {
//     const leaves = await LeaveApplication.find().sort({ createdAt: -1 });
//     res.status(200).json(leaves);
//   } catch (error) {
//     console.error("Error fetching leaves:", error);
//     res.status(500).json({ message: "Server error while fetching leaves" });
//   }
// });

// /**
//  * @route   PUT /api/leave/:id
//  * @desc    Approve/Reject Leave (Mentor)
//  */
// router.put("/:id", async (req, res) => {
//   try {
//     const { status } = req.body;

//     if (!["Approved", "Rejected"].includes(status)) {
//       return res.status(400).json({ message: "Status must be 'Approved' or 'Rejected'" });
//     }

//     const leave = await LeaveApplication.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );

//     if (!leave) {
//       return res.status(404).json({ message: "Leave application not found" });
//     }


//  // 🔹 Emit real-time update to all clients
//     req.io.emit("leaveStatusUpdated", leave);


//     //res.json({ message: Leave ${status.toLowerCase()} successfully, leave });
//     res.json({ message: `Leave ${status.toLowerCase()} successfully`, leave });
//   } catch (error) {
//     console.error("Error updating leave status:", error);
//     res.status(500).json({ message: "Server error while updating leave status" });
//   }
// });


// // routes/leaveRoutes.js
// router.get("/mentor/:mentorId", async (req, res) => {
//   try {
//     const leaves = await LeaveApplication.find({ mentorId: req.params.mentorId })
//       .populate("menteeId", "rollNumber studentName");
//     res.json(leaves);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching leaves" });
//   }
// });



// // ✅ Fetch leave requests of a specific mentee
// router.get("/mentee/:menteeId", async (req, res) => {
//   try {
//     const leaves = await LeaveApplication.find({ menteeId: req.params.menteeId })
//       .populate("mentorId", "name email");  // so you can also show which mentor it went to
//     res.json(leaves);
//   } catch (err) {
//     console.error("Error fetching mentee leaves:", err);
//     res.status(500).json({ message: "Error fetching leave history" });
//   }
// });

// export default router;