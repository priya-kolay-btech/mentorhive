




// import express from "express";
// import Mentor from "../models/Mentor.js"; // your mentor schema
// const router = express.Router();

// router.post("/login", async (req, res) => {
//   try {
//     const { employeeId, password, role } = req.body;

//     // Extra safety: only allow 'mentor' role here
//     if (role !== "mentor") {
//       return res.status(400).json({ message: "Invalid role for this route" });
//     }

//     // Check if mentor exists
//     let mentor = await Mentor.findOne({ employeeId });

//     if (!mentor) {
//       // If not found, create a new mentor
//       mentor = await Mentor.create({ employeeId });
//     }

//     res.json(mentor);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });



// export default router;










import express from "express";
import Mentor from "../models/Mentor.js";

const router = express.Router();

// ✅ Mentor login
router.post("/login", async (req, res) => {
  try {
    const { employeeId, password, role } = req.body;

    // Only mentors allowed here
    if (role !== "mentor") {
      return res.status(400).json({ message: "Invalid role for this route" });
    }

    // Find mentor by employeeId
    let mentor = await Mentor.findOne({ employeeId });

    if (!mentor) {
      // If mentor doesn’t exist, create a new one
      mentor = await Mentor.create({
        employeeId,
        password,
        isOnline: true,
        lastLoginAt: new Date(),
      });
    } else {
      // Update existing mentor login status
      mentor.isOnline = true;
      mentor.lastLoginAt = new Date();
      await mentor.save();
    }

    // Emit socket event for online status
    req.io?.emit("mentorLoggedIn", {
      id: mentor._id,
      employeeId: mentor.employeeId,
      lastLoginAt: mentor.lastLoginAt,
    });

    res.json({
      message: "✅ Mentor logged in successfully",
      mentor,
    });
  } catch (err) {
    console.error("Mentor login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/online", async (req, res) => {
  console.log("👉 /api/mentors/online was called");
  try {
    const mentors = await Mentor.find(
      { isOnline: true },
      "rollNumber mentorName lastLoginAt"
    );
    res.json(mentors);
  } catch (err) {
    console.error("Get online mentors error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Mentor logout
router.post("/logout", async (req, res) => {
  try {
    const { employeeId } = req.body;

    let mentor = await Mentor.findOne({ employeeId });

    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }

    mentor.isOnline = false;
    await mentor.save();

    // Emit socket event for logout
    req.io?.emit("mentorLoggedOut", {
      id: mentor._id,
      employeeId: mentor.employeeId,
    });

    res.json({ message: "✅ Mentor logged out successfully" });
  } catch (err) {
    console.error("Mentor logout error:", err);
    res.status(500).json({ message: "Server error" });
  }
});






export default router;









// import express from "express";
// import Mentor from "../models/Mentor.js";

// const router = express.Router();

// // ✅ Mentor login / register
// router.post("/login", async (req, res) => {
//   try {
//     const { rollNumber, password, role } = req.body;

//     // Extra safety: only allow 'mentor' role here
//     if (role !== "mentor") {
//       return res.status(400).json({ message: "Invalid role for this route" });
//     }

//     // Check if mentor exists by rollNumber
//     let mentor = await Mentor.findOne({ rollNumber });






//     // if (!mentor) {
//     //   // If not found, create a new mentor
//     //   mentor = await Mentor.create({ rollNumber, password });
//     // }

// if (!mentor) {
//       mentor = await Mentor.create({
//         rollNumber,
//         password,
//         isOnline: true,
//         lastLoginAt: new Date(),
//       });
//     } else {
//       mentor.isOnline = true;
//       mentor.lastLoginAt = new Date();
//       await mentor.save();
//     }

//     // optional: emit socket event
//     req.io?.emit("mentorLoggedIn", mentor);





//     res.json(mentor);
  
//   } catch (err) {
//     console.error("Mentor login error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // ✅ Get all mentors (for mentee to choose from)
// router.get("/", async (req, res) => {
//   try {
//     const mentors = await Mentor.find({}, "rollNumber mentorName");
//     res.json(mentors);
//   } catch (err) {
//     console.error("Get mentors error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });







// router.get("/online", async (req, res) => {
//   try {
//     const mentors = await Mentor.find(
//       { isOnline: true },
//       "rollNumber mentorName lastLoginAt"
//     );
//     res.json(mentors);
//   } catch (err) {
//     console.error("Get online mentors error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// export default router;
