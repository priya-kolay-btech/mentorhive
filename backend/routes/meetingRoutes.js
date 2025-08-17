import express from "express";
import Meeting from "../models/Meeting.js";

const router = express.Router();

// POST: Add new meeting
router.post("/", async (req, res) => {
  try {
    const meeting = await Meeting.create(req.body);
    req.io.emit("newMeeting", meeting); // Notify all mentees instantly
    res.status(201).json(meeting);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create meeting" });
  }
});

// GET: Get all meetings
router.get("/", async (req, res) => {
  try {
    const meetings = await Meeting.find().sort({ date: -1 });
    res.json(meetings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch meetings" });
  }
});

export default router;




