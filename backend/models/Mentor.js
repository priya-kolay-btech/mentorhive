// import mongoose from "mongoose";

// const mentorSchema = new mongoose.Schema({
//   rollNumber: { type: String, required: true, unique: true },
//   mentorName: { type: String, required: true },
//   email: { type: String, required: true },
//  password: { type: String, required: true }, // optional: hash for production
//   // Add other fields if needed
// });

// export default mongoose.model("Mentor", mentorSchema);


import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema({
  rollNumber: { type: String, required: true, unique: true }, // keep required
  mentorName: { type: String }, // optional
  email: { type: String },      // optional
  password: { type: String },   // optional
});

export default mongoose.model("Mentor", mentorSchema);
