


// // // import React, { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import io from "socket.io-client";



// // // const socket = io("http://localhost:5000"); // backend socket server

// // // export default function MenteeDashboard() {
// // //   const navigate = useNavigate();
// // //   const rollNumber = localStorage.getItem("rollNumber");
// // //   const studentId = localStorage.getItem("studentId");

// // //   const [student, setStudent] = useState(null);
// // //   const [formData, setFormData] = useState({});
// // //   const [activeTab, setActiveTab] = useState("update");

// // //   const [leaveData, setLeaveData] = useState({ fromDate: "", toDate: "", reason: "" });
// // //   const [leaveHistory, setLeaveHistory] = useState([]);

// // //   // Meetings
// // //   const [meetings, setMeetings] = useState([]);





  
// // //   useEffect(() => {
// // //     if (!rollNumber) {
// // //       alert("No roll number found. Please log in again.");
// // //       navigate("/login");
// // //       return;
// // //     }






// // //     axios.get(`http://localhost:5000/api/students/${rollNumber}`)
// // //       .then((res) => {
// // //         setStudent(res.data);
// // //         setFormData({
// // //           studentName: res.data.studentName || "",
          
// // //           mentorName: res.data.mentorName || "",
// // //           parentEmail: res.data.parentEmail || "",
// // //           parentPhone: res.data.parentPhone || "",
// // //           parentAddress: res.data.parentAddress || "",
// // //           healthIssues: res.data.healthIssues || "",
// // //           extracurricular: res.data.extracurricular || "",
// // //           achievements: res.data.achievements || "",
// // //           classAttendance: res.data.classAttendance || "",
// // //           backlogs: res.data.backlogs || "",
// // //           cgpa: res.data.cgpa || "",
// // //           meetingsAttended: res.data.meetingsAttended || 0,
// // //         });
// // //       })
// // //       .catch(() => alert("❌ Error loading student data"));

// // //     axios.get("http://localhost:5000/api/leave")
// // //       .then((res) => {
// // //         const myLeaves = res.data.filter((l) => l.menteeId === studentId);
// // //         setLeaveHistory(myLeaves);
// // //       })
// // //       .catch(() => alert("❌ Error loading leave history"));

// // //     // Meetings
// // //     axios.get("http://localhost:5000/api/meetings")
// // //       .then((res) => setMeetings(res.data))
// // //       .catch(() => {});

// // //     // Socket listeners
// // //     socket.on("leaveStatusUpdated", (updatedLeave) => {
// // //       if (updatedLeave.menteeId === studentId) {
// // //         setLeaveHistory((prev) =>
// // //           prev.map((l) => (l._id === updatedLeave._id ? updatedLeave : l))
// // //         );
// // //       }
// // //     });

// // //     socket.on("newMeeting", (meeting) => {
// // //       setMeetings((prev) => [meeting, ...prev]);
// // //     });

// // //     return () => {
// // //       socket.off("leaveStatusUpdated");
// // //       socket.off("newMeeting");
// // //     };
// // //   }, [rollNumber, navigate, studentId]);

// // //   const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// // //   const handleUpdate = () => {
// // //     axios
// // //       .put(`http://localhost:5000/api/students/${rollNumber}`, formData)
// // //       .then((res) => {
// // //         alert("✅ Information updated successfully!");
// // //         setStudent(res.data);
// // //       })
// // //       .catch(() => alert("❌ Error updating info"));
// // //   };

// // //   const handleLeaveChange = (e) => setLeaveData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// // //   const handleLeaveSubmit = () => {
// // //     if (!leaveData.fromDate || !leaveData.toDate || !leaveData.reason) {
// // //       return alert("Please fill all leave fields");
// // //     }
// // //     axios
// // //       .post("http://localhost:5000/api/leave", {
// // //         menteeId: studentId,
// // //         menteeName: student?.rollNumber,
// // //         ...leaveData,
// // //       })
// // //       .then((res) => {
// // //         alert("✅ Leave request submitted!");
// // //         setLeaveData({ fromDate: "", toDate: "", reason: "" });
// // //         setLeaveHistory((prev) => [res.data.leave, ...prev]);
// // //       })
// // //       .catch(() => alert("❌ Error submitting leave request"));
// // //   };

// // //   if (!student) return <p style={{ padding: "20px" }}>Loading...</p>;

// // //   // Separate upcoming & passed meetings
// // //   const now = new Date();
// // //   const upcomingMeetings = meetings
// // //     .filter((m) => new Date(m.date) >= now)
// // //     .sort((a, b) => new Date(a.date) - new Date(b.date));

// // //   const passedMeetings = meetings
// // //     .filter((m) => new Date(m.date) < now)
// // //     .sort((a, b) => new Date(b.date) - new Date(a.date));

// // //   return (
// // //     <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
// // //       {/* Sidebar */}
// // //       <div
// // //         style={{
// // //           width: "260px", background: "#1e293b", color: "white", padding: "15px",
// // //           fontWeight: "bold", boxShadow: "2px 0px 8px rgba(0,0,0,0.2)",
// // //         }}
// // //       >
// // //         <h2 style={{ marginBottom: "20px", fontSize: "20px" }}>Mentee Dashboard</h2>
// // //         <ul style={{ listStyle: "none", padding: 0 }}>
// // //           <li
// // //             onClick={() => setActiveTab("update")}
// // //             style={{
// // //               padding: "10px", background: activeTab === "update" ? "#3b82f6" : "transparent",
// // //               borderRadius: "6px", cursor: "pointer",
// // //             }}
// // //           >
// // //             Update Info
// // //           </li>
// // //           <li
// // //             onClick={() => setActiveTab("leave")}
// // //             style={{
// // //               padding: "10px", background: activeTab === "leave" ? "#3b82f6" : "transparent",
// // //               borderRadius: "6px", marginTop: "10px", cursor: "pointer",
// // //             }}
// // //           >
// // //             Leave Application & Status
// // //           </li>
// // //           <li
// // //             onClick={() => setActiveTab("meetings")}
// // //             style={{
// // //               padding: "10px", background: activeTab === "meetings" ? "#3b82f6" : "transparent",
// // //               borderRadius: "6px", marginTop: "10px", cursor: "pointer",
// // //             }}
// // //           >
// // //             Meeting Announcements
// // //           </li>
// // //         </ul>
// // //       </div>

// // //       {/* Main */}
// // //       <div style={{ flex: 1, padding: "20px", background: "#f8fafc", color: "#111", overflowY: "auto" }}>
// // //         <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>Welcome, {student.rollNumber}</h1>

// // //         {activeTab === "update" && (
// // //           <div style={{ marginTop: 20, background: "#fff", padding: 20, borderRadius: 8 }}>
// // //             <h2 style={{ fontSize: 20, marginBottom: 10 }}>Edit Your Information</h2>

// // //             {Object.keys(formData).map((field) => (
// // //               <div key={field} style={{ marginBottom: 10 }}>
// // //                 <label style={{ fontWeight: "bold", display: "block" }}>
// // //                   {field.charAt(0).toUpperCase() + field.slice(1)}
// // //                 </label>
// // //                 <input
// // //                   name={field}
// // //                   type={typeof formData[field] === "number" ? "number" : "text"}
// // //                   value={formData[field]}
// // //                   onChange={handleChange}
// // //                   style={{ display: "block", width: "100%", padding: 8, marginTop: 4, border: "1px solid #ccc", borderRadius: 4 }}
// // //                 />
// // //               </div>
// // //             ))}

// // //             <button
// // //               onClick={handleUpdate}
// // //               style={{ background: "#3b82f6", color: "white", padding: "10px 15px", border: "none", borderRadius: 6, cursor: "pointer", marginTop: 10 }}
// // //             >
// // //               Save Changes
// // //             </button>
// // //           </div>
// // //         )}

// // //         {activeTab === "leave" && (
// // //           <div style={{ marginTop: 20, background: "#fff", padding: 20, borderRadius: 8 }}>
// // //             <h2 style={{ fontSize: 20, marginBottom: 10 }}>Leave Application</h2>

// // //             <div style={{ marginBottom: 10 }}>
// // //               <label style={{ fontWeight: "bold", display: "block" }}>From Date</label>
// // //               <input
// // //                 type="date" name="fromDate" value={leaveData.fromDate} onChange={handleLeaveChange}
// // //                 style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
// // //               />
// // //             </div>

// // //             <div style={{ marginBottom: 10 }}>
// // //               <label style={{ fontWeight: "bold", display: "block" }}>To Date</label>
// // //               <input
// // //                 type="date" name="toDate" value={leaveData.toDate} onChange={handleLeaveChange}
// // //                 style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
// // //               />
// // //             </div>

// // //             <div style={{ marginBottom: 10 }}>
// // //               <label style={{ fontWeight: "bold", display: "block" }}>Reason</label>
// // //               <textarea
// // //                 name="reason" value={leaveData.reason} onChange={handleLeaveChange} rows="4"
// // //                 style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
// // //               />
// // //             </div>

// // //             <button
// // //               onClick={handleLeaveSubmit}
// // //               style={{ background: "#3b82f6", color: "white", padding: "10px 15px", border: "none", borderRadius: 6, cursor: "pointer", marginTop: 10 }}
// // //             >
// // //               Submit Leave
// // //             </button>

// // //             <h3 style={{ marginTop: 30, fontSize: 18 }}>Your Leave Requests</h3>
// // //             <ul>
// // //               {leaveHistory.map((leave) => (
// // //                 <li
// // //                   key={leave._id}
// // //                   style={{ padding: 10, marginTop: 8, background: "#f0f9ff", borderRadius: 5 }}
// // //                 >
// // //                   <strong>Reason:</strong> {leave.reason} <br />
// // //                   <strong>From:</strong> {new Date(leave.fromDate).toLocaleDateString()} |{" "}
// // //                   <strong>To:</strong> {new Date(leave.toDate).toLocaleDateString()} <br />
// // //                   <strong>Status:</strong>{" "}
// // //                   <span
// // //                     style={{
// // //                       color: leave.status === "Approved" ? "green" : leave.status === "Rejected" ? "red" : "orange",
// // //                       fontWeight: "bold",
// // //                     }}
// // //                   >
// // //                     {leave.status}
// // //                   </span>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //         )}

// // //         {activeTab === "meetings" && (
// // //           <div style={{ marginTop: 20, background: "#fff", padding: 20, borderRadius: 8 }}>
// // //             <h2 style={{ fontSize: 20, marginBottom: 10 }}>📅 Upcoming Meetings</h2>
// // //             {upcomingMeetings.length === 0 && <p>No upcoming meetings.</p>}
// // //             <ul>
// // //               {upcomingMeetings.map((m) => (
// // //                 <li key={m._id} style={{ background: "#f8fafc", padding: 12, borderRadius: 8, marginTop: 8, border: "1px solid #e5e7eb" }}>
// // //                   <strong>{m.title}</strong> — {new Date(m.date).toLocaleString()}
// // //                   <br />
// // //                   {m.description}
// // //                 </li>
// // //               ))}
// // //             </ul>

// // //             <h2 style={{ fontSize: 20, marginBottom: 10, marginTop: 30 }}>✅ Passed Meetings</h2>
// // //             {passedMeetings.length === 0 && <p>No passed meetings.</p>}
// // //             <ul>
// // //               {passedMeetings.map((m) => (
// // //                 <li key={m._id} style={{ background: "#fef2f2", padding: 12, borderRadius: 8, marginTop: 8, border: "1px solid #e5e7eb" }}>
// // //                   <strong>{m.title}</strong> — {new Date(m.date).toLocaleString()}
// // //                   <br />
// // //                   {m.description}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // import React, { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import io from "socket.io-client";

// // // const socket = io("http://localhost:5000"); // backend socket server

// // // export default function MenteeDashboard() {
// // //   const navigate = useNavigate();
// // //   const rollNumber = localStorage.getItem("rollNumber");
// // //   const studentId = localStorage.getItem("studentId");

// // //   const [student, setStudent] = useState(null);
// // //   const [formData, setFormData] = useState({});
// // //   const [activeTab, setActiveTab] = useState("update");

// // //   const [leaveData, setLeaveData] = useState({ fromDate: "", toDate: "", reason: "" });
// // //   const [leaveHistory, setLeaveHistory] = useState([]);

// // //   // Meetings
// // //   const [meetings, setMeetings] = useState([]);

// // //   useEffect(() => {
// // //     if (!studentId) {
// // //       alert("No student ID found. Please log in again.");
// // //       navigate("/login");
// // //       return;
// // //     }

// // //     // ✅ Fetch student by ID (not rollNumber)
// // //     axios.get(`http://localhost:5000/api/students/${studentId}`)
// // //       .then((res) => {
// // //         setStudent(res.data);
// // //         setFormData({
// // //           studentName: res.data.studentName || "",
// // //           mentorName: res.data.mentorName || "",
// // //           parentEmail: res.data.parentEmail || "",
// // //           parentPhone: res.data.parentPhone || "",
// // //           parentAddress: res.data.parentAddress || "",
// // //           healthIssues: res.data.healthIssues || "",
// // //           extracurricular: res.data.extracurricular || "",
// // //           achievements: res.data.achievements || "",
// // //           classAttendance: res.data.classAttendance || "",
// // //           backlogs: res.data.backlogs || "",
// // //           cgpa: res.data.cgpa || "",
// // //           meetingsAttended: res.data.meetingsAttended || 0,
// // //         });

// // //         // ✅ Cache student for reload safety
// // //         localStorage.setItem("student", JSON.stringify(res.data));
// // //       })
// // //       .catch(() => {
// // //         const cached = localStorage.getItem("student");
// // //         if (cached) {
// // //           const data = JSON.parse(cached);
// // //           setStudent(data);
// // //           setFormData(data);
// // //         } else {
// // //           alert("❌ Error loading student data");
// // //         }
// // //       });

// // //     // Leave history
// // //     axios.get("http://localhost:5000/api/leave")
// // //       .then((res) => {
// // //         const myLeaves = res.data.filter((l) => l.menteeId === studentId);
// // //         setLeaveHistory(myLeaves);
// // //       })
// // //       .catch(() => alert("❌ Error loading leave history"));

// // //     // Meetings
// // //     axios.get("http://localhost:5000/api/meetings")
// // //       .then((res) => setMeetings(res.data))
// // //       .catch(() => {});

// // //     // Socket listeners
// // //     socket.on("leaveStatusUpdated", (updatedLeave) => {
// // //       if (updatedLeave.menteeId === studentId) {
// // //         setLeaveHistory((prev) =>
// // //           prev.map((l) => (l._id === updatedLeave._id ? updatedLeave : l))
// // //         );
// // //       }
// // //     });

// // //     socket.on("newMeeting", (meeting) => {
// // //       setMeetings((prev) => [meeting, ...prev]);
// // //     });

// // //     return () => {
// // //       socket.off("leaveStatusUpdated");
// // //       socket.off("newMeeting");
// // //     };
// // //   }, [navigate, studentId]);

// // //   const handleChange = (e) =>
// // //     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

// // //   // ✅ Update student using studentId
// // //   const handleUpdate = () => {
// // //     axios
// // //       .put(`http://localhost:5000/api/students/${studentId}`, formData)
// // //       .then((res) => {
// // //         alert("✅ Information updated successfully!");
// // //         setStudent(res.data);
// // //         localStorage.setItem("student", JSON.stringify(res.data));
// // //       })
// // //       .catch(() => alert("❌ Error updating info"));
// // //   };

// // //   const handleLeaveChange = (e) =>
// // //     setLeaveData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

// // //   const handleLeaveSubmit = () => {
// // //     if (!leaveData.fromDate || !leaveData.toDate || !leaveData.reason) {
// // //       return alert("Please fill all leave fields");
// // //     }
// // //     axios
// // //       .post("http://localhost:5000/api/leave", {
// // //         menteeId: studentId,
// // //         menteeName: student?.rollNumber,
// // //         ...leaveData,
// // //       })
// // //       .then((res) => {
// // //         alert("✅ Leave request submitted!");
// // //         setLeaveData({ fromDate: "", toDate: "", reason: "" });
// // //         setLeaveHistory((prev) => [res.data.leave, ...prev]);
// // //       })
// // //       .catch(() => alert("❌ Error submitting leave request"));
// // //   };

// // //   if (!student) return <p style={{ padding: "20px" }}>Loading...</p>;

// // //   // Separate upcoming & passed meetings
// // //   const now = new Date();
// // //   const upcomingMeetings = meetings
// // //     .filter((m) => new Date(m.date) >= now)
// // //     .sort((a, b) => new Date(a.date) - new Date(b.date));

// // //   const passedMeetings = meetings
// // //     .filter((m) => new Date(m.date) < now)
// // //     .sort((a, b) => new Date(b.date) - new Date(a.date));

// // //   return (
// // //     <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
// // //       {/* Sidebar */}
// // //       <div
// // //         style={{
// // //           width: "260px",
// // //           background: "#1e293b",
// // //           color: "white",
// // //           padding: "15px",
// // //           fontWeight: "bold",
// // //           boxShadow: "2px 0px 8px rgba(0,0,0,0.2)",
// // //         }}
// // //       >
// // //         <h2 style={{ marginBottom: "20px", fontSize: "20px" }}>
// // //           Mentee Dashboard
// // //         </h2>
// // //         <ul style={{ listStyle: "none", padding: 0 }}>
// // //           <li
// // //             onClick={() => setActiveTab("update")}
// // //             style={{
// // //               padding: "10px",
// // //               background: activeTab === "update" ? "#3b82f6" : "transparent",
// // //               borderRadius: "6px",
// // //               cursor: "pointer",
// // //             }}
// // //           >
// // //             Update Info
// // //           </li>
// // //           <li
// // //             onClick={() => setActiveTab("leave")}
// // //             style={{
// // //               padding: "10px",
// // //               background: activeTab === "leave" ? "#3b82f6" : "transparent",
// // //               borderRadius: "6px",
// // //               marginTop: "10px",
// // //               cursor: "pointer",
// // //             }}
// // //           >
// // //             Leave Application & Status
// // //           </li>
// // //           <li
// // //             onClick={() => setActiveTab("meetings")}
// // //             style={{
// // //               padding: "10px",
// // //               background: activeTab === "meetings" ? "#3b82f6" : "transparent",
// // //               borderRadius: "6px",
// // //               marginTop: "10px",
// // //               cursor: "pointer",
// // //             }}
// // //           >
// // //             Meeting Announcements
// // //           </li>
// // //         </ul>
// // //       </div>

// // //       {/* Main */}
// // //       <div
// // //         style={{
// // //           flex: 1,
// // //           padding: "20px",
// // //           background: "#f8fafc",
// // //           color: "#111",
// // //           overflowY: "auto",
// // //         }}
// // //       >
// // //         <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
// // //           Welcome, {rollNumber}
// // //         </h1>

// // //         {/* Tabs remain unchanged */}
// // //         {activeTab === "update" && (
// // //           <div
// // //             style={{
// // //               marginTop: 20,
// // //               background: "#fff",
// // //               padding: 20,
// // //               borderRadius: 8,
// // //             }}
// // //           >
// // //             <h2 style={{ fontSize: 20, marginBottom: 10 }}>
// // //               Edit Your Information
// // //             </h2>

// // //             {Object.keys(formData).map((field) => (
// // //               <div key={field} style={{ marginBottom: 10 }}>
// // //                 <label style={{ fontWeight: "bold", display: "block" }}>
// // //                   {field.charAt(0).toUpperCase() + field.slice(1)}
// // //                 </label>
// // //                 <input
// // //                   name={field}
// // //                   type={typeof formData[field] === "number" ? "number" : "text"}
// // //                   value={formData[field]}
// // //                   onChange={handleChange}
// // //                   style={{
// // //                     display: "block",
// // //                     width: "100%",
// // //                     padding: 8,
// // //                     marginTop: 4,
// // //                     border: "1px solid #ccc",
// // //                     borderRadius: 4,
// // //                   }}
// // //                 />
// // //               </div>
// // //             ))}

// // //             <button
// // //               onClick={handleUpdate}
// // //               style={{
// // //                 background: "#3b82f6",
// // //                 color: "white",
// // //                 padding: "10px 15px",
// // //                 border: "none",
// // //                 borderRadius: 6,
// // //                 cursor: "pointer",
// // //                 marginTop: 10,
// // //               }}
// // //             >
// // //               Save Changes
// // //             </button>
// // //           </div>
// // //         )}

// // //         {activeTab === "leave" && (
// // //           <div
// // //             style={{
// // //               marginTop: 20,
// // //               background: "#fff",
// // //               padding: 20,
// // //               borderRadius: 8,
// // //             }}
// // //           >
// // //             {/* Leave Tab (unchanged) */}
// // //             ...
// // //           </div>
// // //         )}

// // //         {activeTab === "meetings" && (
// // //           <div
// // //             style={{
// // //               marginTop: 20,
// // //               background: "#fff",
// // //               padding: 20,
// // //               borderRadius: 8,
// // //             }}
// // //           >
// // //             {/* Meetings Tab (unchanged) */}
// // //             ...
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // import React, { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import io from "socket.io-client";

// // // const socket = io("http://localhost:5000"); // backend socket server

// // // export default function MenteeDashboard() {
// // //   const navigate = useNavigate();
// // //   const rollNumber = localStorage.getItem("rollNumber");
// // //   const studentId = localStorage.getItem("studentId");

// // //   const [student, setStudent] = useState(null);
// // //   const [formData, setFormData] = useState({});
// // //   const [activeTab, setActiveTab] = useState("update");

// // //   const [leaveData, setLeaveData] = useState({ fromDate: "", toDate: "", reason: "" });
// // //   const [leaveHistory, setLeaveHistory] = useState([]);

// // //   const [meetings, setMeetings] = useState([]);

// // //   useEffect(() => {
// // //     if (!studentId) {
// // //       alert("No student ID found. Please log in again.");
// // //       navigate("/login");
// // //       return;
// // //     }

// // //     // ✅ Fetch student by ID
// // //     axios.get(`http://localhost:5000/api/students/${studentId}`)
// // //       .then((res) => {
// // //         setStudent(res.data);
// // //         setFormData({
// // //           studentName: res.data.studentName || "",
// // //           mentorName: res.data.mentorName || "",
// // //           parentEmail: res.data.parentEmail || "",
// // //           parentPhone: res.data.parentPhone || "",
// // //           parentAddress: res.data.parentAddress || "",
// // //           healthIssues: res.data.healthIssues || "",
// // //           extracurricular: res.data.extracurricular || "",
// // //           achievements: res.data.achievements || "",
// // //           classAttendance: res.data.classAttendance || "",
// // //           backlogs: res.data.backlogs || "",
// // //           cgpa: res.data.cgpa || "",
// // //           meetingsAttended: res.data.meetingsAttended || 0,
// // //         });
// // //         localStorage.setItem("student", JSON.stringify(res.data));
// // //       })
// // //       .catch(() => {
// // //         const cached = localStorage.getItem("student");
// // //         if (cached) {
// // //           setStudent(JSON.parse(cached));
// // //           setFormData(JSON.parse(cached));
// // //         } else {
// // //           alert("❌ Error loading student data");
// // //         }
// // //       });

// // //     // ✅ Fetch leave history
// // //     axios.get("http://localhost:5000/api/leave")
// // //       .then((res) => {
// // //         const myLeaves = res.data.filter((l) => l.menteeId === studentId);
// // //         setLeaveHistory(myLeaves);
// // //       })
// // //       .catch(() => alert("❌ Error loading leave history"));

// // //     // ✅ Fetch meetings
// // //     axios.get("http://localhost:5000/api/meetings")
// // //       .then((res) => setMeetings(res.data))
// // //       .catch(() => {});

// // //     // ✅ Socket listeners
// // //     socket.on("leaveStatusUpdated", (updatedLeave) => {
// // //       if (updatedLeave.menteeId === studentId) {
// // //         setLeaveHistory((prev) =>
// // //           prev.map((l) => (l._id === updatedLeave._id ? updatedLeave : l))
// // //         );
// // //       }
// // //     });

// // //     socket.on("newMeeting", (meeting) => {
// // //       setMeetings((prev) => [meeting, ...prev]);
// // //     });

// // //     return () => {
// // //       socket.off("leaveStatusUpdated");
// // //       socket.off("newMeeting");
// // //     };
// // //   }, [navigate, studentId]);

// // //   const handleChange = (e) =>
// // //     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

// // //   const handleUpdate = () => {
// // //     axios
// // //       .put(`http://localhost:5000/api/students/${studentId}`, formData)
// // //       .then((res) => {
// // //         alert("✅ Information updated successfully!");
// // //         setStudent(res.data);
// // //         localStorage.setItem("student", JSON.stringify(res.data));
// // //       })
// // //       .catch(() => alert("❌ Error updating info"));
// // //   };

// // //   const handleLeaveChange = (e) =>
// // //     setLeaveData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

// // //   const handleLeaveSubmit = () => {
// // //     if (!leaveData.fromDate || !leaveData.toDate || !leaveData.reason) {
// // //       return alert("Please fill all leave fields");
// // //     }
// // //     axios
// // //       .post("http://localhost:5000/api/leave", {
// // //         menteeId: studentId,
// // //         menteeName: student?.rollNumber,
// // //         ...leaveData,
// // //       })
// // //       .then((res) => {
// // //         alert("✅ Leave request submitted!");
// // //         setLeaveData({ fromDate: "", toDate: "", reason: "" });
// // //         setLeaveHistory((prev) => [res.data.leave, ...prev]);
// // //       })
// // //       .catch(() => alert("❌ Error submitting leave request"));
// // //   };

// // //   if (!student) return <p style={{ padding: "20px" }}>Loading...</p>;

// // //   const now = new Date();
// // //   const upcomingMeetings = meetings
// // //     .filter((m) => new Date(m.date) >= now)
// // //     .sort((a, b) => new Date(a.date) - new Date(b.date));
// // //   const passedMeetings = meetings
// // //     .filter((m) => new Date(m.date) < now)
// // //     .sort((a, b) => new Date(b.date) - new Date(a.date));

// // //   return (
// // //     <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
// // //       {/* Sidebar */}
// // //       <div
// // //         style={{
// // //           width: "260px",
// // //           background: "#1e293b",
// // //           color: "white",
// // //           padding: "15px",
// // //           fontWeight: "bold",
// // //           boxShadow: "2px 0px 8px rgba(0,0,0,0.2)",
// // //         }}
// // //       >
// // //         <h2 style={{ marginBottom: "20px", fontSize: "20px" }}>
// // //           Mentee Dashboard
// // //         </h2>
// // //         <ul style={{ listStyle: "none", padding: 0 }}>
// // //           <li
// // //             onClick={() => setActiveTab("update")}
// // //             style={{
// // //               padding: "10px",
// // //               background: activeTab === "update" ? "#3b82f6" : "transparent",
// // //               borderRadius: "6px",
// // //               cursor: "pointer",
// // //             }}
// // //           >
// // //             Update Info
// // //           </li>
// // //           <li
// // //             onClick={() => setActiveTab("leave")}
// // //             style={{
// // //               padding: "10px",
// // //               background: activeTab === "leave" ? "#3b82f6" : "transparent",
// // //               borderRadius: "6px",
// // //               marginTop: "10px",
// // //               cursor: "pointer",
// // //             }}
// // //           >
// // //             Leave Application & Status
// // //           </li>
// // //           <li
// // //             onClick={() => setActiveTab("meetings")}
// // //             style={{
// // //               padding: "10px",
// // //               background: activeTab === "meetings" ? "#3b82f6" : "transparent",
// // //               borderRadius: "6px",
// // //               marginTop: "10px",
// // //               cursor: "pointer",
// // //             }}
// // //           >
// // //             Meeting Announcements
// // //           </li>
// // //         </ul>
// // //       </div>

// // //       {/* Main */}
// // //       <div
// // //         style={{
// // //           flex: 1,
// // //           padding: "20px",
// // //           background: "#f8fafc",
// // //           color: "#111",
// // //           overflowY: "auto",
// // //         }}
// // //       >
// // //         <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
// // //           Welcome, {rollNumber}
// // //         </h1>

// // //         {/* Update Info */}
// // //         {activeTab === "update" && (
// // //           <div style={{ marginTop: 20, background: "#fff", padding: 20, borderRadius: 8 }}>
// // //             <h2 style={{ fontSize: 20, marginBottom: 10 }}>Edit Your Information</h2>
// // //             {Object.keys(formData).map((field) => (
// // //               <div key={field} style={{ marginBottom: 10 }}>
// // //                 <label style={{ fontWeight: "bold", display: "block" }}>
// // //                   {field.charAt(0).toUpperCase() + field.slice(1)}
// // //                 </label>
// // //                 <input
// // //                   name={field}
// // //                   type={typeof formData[field] === "number" ? "number" : "text"}
// // //                   value={formData[field]}
// // //                   onChange={handleChange}
// // //                   style={{
// // //                     display: "block",
// // //                     width: "100%",
// // //                     padding: 8,
// // //                     marginTop: 4,
// // //                     border: "1px solid #ccc",
// // //                     borderRadius: 4,
// // //                   }}
// // //                 />
// // //               </div>
// // //             ))}
// // //             <button
// // //               onClick={handleUpdate}
// // //               style={{
// // //                 background: "#3b82f6",
// // //                 color: "white",
// // //                 padding: "10px 15px",
// // //                 border: "none",
// // //                 borderRadius: 6,
// // //                 cursor: "pointer",
// // //                 marginTop: 10,
// // //               }}
// // //             >
// // //               Save Changes
// // //             </button>
// // //           </div>
// // //         )}

// // //         {/* Leave Applications */}
// // //         {activeTab === "leave" && (
// // //           <div style={{ marginTop: 20, background: "#fff", padding: 20, borderRadius: 8 }}>
// // //             <h2 style={{ fontSize: 20, marginBottom: 10 }}>Leave Application</h2>
// // //             <input
// // //               type="date"
// // //               name="fromDate"
// // //               value={leaveData.fromDate}
// // //               onChange={handleLeaveChange}
// // //               placeholder="From Date"
// // //               style={{ marginBottom: 10, padding: 8, width: "100%" }}
// // //             />
// // //             <input
// // //               type="date"
// // //               name="toDate"
// // //               value={leaveData.toDate}
// // //               onChange={handleLeaveChange}
// // //               placeholder="To Date"
// // //               style={{ marginBottom: 10, padding: 8, width: "100%" }}
// // //             />
// // //             <textarea
// // //               name="reason"
// // //               value={leaveData.reason}
// // //               onChange={handleLeaveChange}
// // //               placeholder="Reason"
// // //               style={{ marginBottom: 10, padding: 8, width: "100%" }}
// // //             />
// // //             <button
// // //               onClick={handleLeaveSubmit}
// // //               style={{
// // //                 background: "#3b82f6",
// // //                 color: "white",
// // //                 padding: "10px 15px",
// // //                 border: "none",
// // //                 borderRadius: 6,
// // //                 cursor: "pointer",
// // //               }}
// // //             >
// // //               Submit Leave
// // //             </button>

// // //             <h3 style={{ marginTop: 20 }}>Leave History</h3>
// // //             <ul>
// // //               {leaveHistory.map((leave) => (
// // //                 <li key={leave._id}>
// // //                   {leave.fromDate} → {leave.toDate} : {leave.reason} —{" "}
// // //                   <b>{leave.status}</b>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //         )}

// // //         {/* Meetings */}
// // //         {activeTab === "meetings" && (
// // //           <div style={{ marginTop: 20, background: "#fff", padding: 20, borderRadius: 8 }}>
// // //             <h2 style={{ fontSize: 20, marginBottom: 10 }}>Upcoming Meetings</h2>
// // //             {upcomingMeetings.length === 0 ? (
// // //               <p>No upcoming meetings</p>
// // //             ) : (
// // //               <ul>
// // //                 {upcomingMeetings.map((m) => (
// // //                   <li key={m._id}>
// // //                     {new Date(m.date).toLocaleString()} — {m.agenda}
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             )}

// // //             <h2 style={{ fontSize: 20, margin: "20px 0 10px" }}>Past Meetings</h2>
// // //             {passedMeetings.length === 0 ? (
// // //               <p>No past meetings</p>
// // //             ) : (
// // //               <ul>
// // //                 {passedMeetings.map((m) => (
// // //                   <li key={m._id}>
// // //                     {new Date(m.date).toLocaleString()} — {m.agenda}
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             )}
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // import React, { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import io from "socket.io-client";

// // // const socket = io("http://localhost:5000"); // backend socket server

// // // export default function MenteeDashboard() {
// // //   const navigate = useNavigate();
// // //   const rollNumber = localStorage.getItem("rollNumber");
// // //   const studentId = localStorage.getItem("studentId");

// // //   const [student, setStudent] = useState(null);
// // //   const [formData, setFormData] = useState({});
// // //   const [activeTab, setActiveTab] = useState("update");

// // //   const [leaveData, setLeaveData] = useState({
// // //     fromDate: "",
// // //     toDate: "",
// // //     reason: "",
// // //   });
// // //   const [leaveHistory, setLeaveHistory] = useState([]);

// // //   const [meetings, setMeetings] = useState([]);

// // //   useEffect(() => {
// // //     if (!studentId) {
// // //       alert("No student ID found. Please log in again.");
// // //       navigate("/login");
// // //       return;
// // //     }

// // //     // ✅ Fetch student by ID
// // //     axios
// // //       .get(`http://localhost:5000/api/students/roll/${rollNumber}`)
// // //       .then((res) => {
// // //         setStudent(res.data);
// // //         setFormData({
// // //           studentName: res.data.studentName || "",
// // //           mentorName: res.data.mentorName || "",
// // //           parentEmail: res.data.parentEmail || "",
// // //           parentPhone: res.data.parentPhone || "",
// // //           parentAddress: res.data.parentAddress || "",
// // //           healthIssues: res.data.healthIssues || "",
// // //           extracurricular: res.data.extracurricular || "",
// // //           achievements: res.data.achievements || "",
// // //           classAttendance: res.data.classAttendance || "",
// // //           backlogs: res.data.backlogs || "",
// // //           cgpa: res.data.cgpa || "",
// // //           meetingsAttended: res.data.meetingsAttended || 0,
// // //         });
// // //         localStorage.setItem("student", JSON.stringify(res.data));
// // //       })
// // //       .catch(() => {
// // //         const cached = localStorage.getItem("student");
// // //         if (cached) {
// // //           setStudent(JSON.parse(cached));
// // //           setFormData(JSON.parse(cached));
// // //         } else {
// // //           alert("❌ Error loading student data");
// // //         }
// // //       });

// // //     // ✅ Fetch leave history
// // //     axios
// // //       .get("http://localhost:5000/api/leave")
// // //       .then((res) => {
// // //         const myLeaves = res.data.filter((l) => l.menteeId === studentId);
// // //         setLeaveHistory(myLeaves);
// // //       })
// // //       .catch(() => alert("❌ Error loading leave history"));

// // //     // ✅ Fetch meetings
// // //     axios
// // //       .get("http://localhost:5000/api/meetings")
// // //       .then((res) => setMeetings(res.data))
// // //       .catch(() => {});

// // //     // ✅ Socket listeners
// // //     socket.on("leaveStatusUpdated", (updatedLeave) => {
// // //       if (updatedLeave.menteeId === studentId) {
// // //         setLeaveHistory((prev) =>
// // //           prev.map((l) => (l._id === updatedLeave._id ? updatedLeave : l))
// // //         );
// // //       }
// // //     });

// // //     socket.on("newMeeting", (meeting) => {
// // //       setMeetings((prev) => [meeting, ...prev]);
// // //     });

// // //     return () => {
// // //       socket.off("leaveStatusUpdated");
// // //       socket.off("newMeeting");
// // //     };
// // //   }, [navigate, studentId]);

// // //   const handleChange = (e) =>
// // //     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

// // //   // const handleUpdate = () => {
// // //   //   axios
// // //   //     .put(`http://localhost:5000/api/students/${student.rollNumber}`, formData)
// // //   //     .then((res) => {
// // //   //       alert("✅ Information updated successfully!");
// // //   //       setStudent(res.data);
// // //   //       localStorage.setItem("student", JSON.stringify(res.data));
// // //   //     })
// // //   //     .catch(() => alert("❌ Error updating info"));
// // //   // };
// // // const handleUpdate = () => {
// // //   const rollNumber = localStorage.getItem("rollNumber"); // ✅ always pull from storage

// // //   axios
// // //     .put(`http://localhost:5000/api/students/roll/${rollNumber}`, formData) // ✅ use rollNumber
// // //     .then((res) => {
// // //       alert("✅ Information updated successfully!");
// // //       setStudent(res.data);
// // //       localStorage.setItem("student", JSON.stringify(res.data)); // keep local copy fresh
// // //     })
// // //     .catch((err) => {
// // //       console.error("Update error:", err.response?.data || err.message);
// // //       alert("❌ Error updating info");
// // //     });
// // // };

// // //   const handleLeaveChange = (e) =>
// // //     setLeaveData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

// // //   const handleLeaveSubmit = () => {
// // //     if (!leaveData.fromDate || !leaveData.toDate || !leaveData.reason) {
// // //       return alert("Please fill all leave fields");
// // //     }
// // //     axios
// // //       .post("http://localhost:5000/api/leave", {
// // //         menteeId: studentId,
// // //         menteeName: student?.rollNumber,
// // //         ...leaveData,
// // //       })
// // //       .then((res) => {
// // //         alert("✅ Leave request submitted!");
// // //         setLeaveData({ fromDate: "", toDate: "", reason: "" });
// // //         setLeaveHistory((prev) => [res.data.leave, ...prev]);
// // //       })
// // //       .catch(() => alert("❌ Error submitting leave request"));
// // //   };

// // //   if (!student) return <p style={{ padding: "20px" }}>Loading...</p>;

// // //   const now = new Date();
// // //   const upcomingMeetings = meetings
// // //     .filter((m) => new Date(m.date) >= now)
// // //     .sort((a, b) => new Date(a.date) - new Date(b.date));
// // //   const passedMeetings = meetings
// // //     .filter((m) => new Date(m.date) < now)
// // //     .sort((a, b) => new Date(b.date) - new Date(a.date));

// // //   return (
// // //     <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
// // //       {/* Sidebar */}
// // //       <div
// // //         style={{
// // //           width: "260px",
// // //           background: "#1e293b",
// // //           color: "white",
// // //           padding: "15px",
// // //           fontWeight: "bold",
// // //           boxShadow: "2px 0px 8px rgba(0,0,0,0.2)",
// // //         }}
// // //       >
// // //         <h2 style={{ marginBottom: "20px", fontSize: "20px" }}>
// // //           Mentee Dashboard
// // //         </h2>
// // //         <ul style={{ listStyle: "none", padding: 0 }}>
// // //           <li
// // //             onClick={() => setActiveTab("update")}
// // //             style={{
// // //               padding: "10px",
// // //               background: activeTab === "update" ? "#3b82f6" : "transparent",
// // //               borderRadius: "6px",
// // //               cursor: "pointer",
// // //             }}
// // //           >
// // //             Update Info
// // //           </li>
// // //           <li
// // //             onClick={() => setActiveTab("leave")}
// // //             style={{
// // //               padding: "10px",
// // //               background: activeTab === "leave" ? "#3b82f6" : "transparent",
// // //               borderRadius: "6px",
// // //               marginTop: "10px",
// // //               cursor: "pointer",
// // //             }}
// // //           >
// // //             Leave Application & Status
// // //           </li>
// // //           <li
// // //             onClick={() => setActiveTab("meetings")}
// // //             style={{
// // //               padding: "10px",
// // //               background: activeTab === "meetings" ? "#3b82f6" : "transparent",
// // //               borderRadius: "6px",
// // //               marginTop: "10px",
// // //               cursor: "pointer",
// // //             }}
// // //           >
// // //             Meeting Announcements
// // //           </li>
// // //         </ul>
// // //       </div>

// // //       {/* Main */}
// // //       <div
// // //         style={{
// // //           flex: 1,
// // //           padding: "20px",
// // //           background: "#f8fafc",
// // //           color: "#111",
// // //           overflowY: "auto",
// // //         }}
// // //       >
// // //         <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
// // //           Welcome, {rollNumber}
// // //         </h1>

// // //         {/* Update Info */}
// // //         {activeTab === "update" && (
// // //           <div
// // //             style={{
// // //               marginTop: 20,
// // //               background: "#fff",
// // //               padding: 20,
// // //               borderRadius: 8,
// // //             }}
// // //           >
// // //             <h2 style={{ fontSize: 20, marginBottom: 10 }}>
// // //               Edit Your Information
// // //             </h2>

// // //             {/* ✅ Only display selected fields */}
// // //             {[
// // //               "studentName",
// // //               "mentorName",
// // //               "parentEmail",
// // //               "parentPhone",
// // //               "parentAddress",
// // //               "healthIssues",
// // //               "extracurricular",
// // //               "achievements",
// // //               "classAttendance",
// // //               "backlogs",
// // //               "cgpa",
// // //               "meetingsAttended",
// // //             ].map((field) => (
// // //               <div key={field} style={{ marginBottom: 10 }}>
// // //                 <label style={{ fontWeight: "bold", display: "block" }}>
// // //                   {field.charAt(0).toUpperCase() + field.slice(1)}
// // //                 </label>
// // //                 <input
// // //                   name={field}
// // //                   type={
// // //                     typeof formData[field] === "number" ? "number" : "text"
// // //                   }
// // //                   value={formData[field] || ""}
// // //                   onChange={handleChange}
// // //                   style={{
// // //                     display: "block",
// // //                     width: "100%",
// // //                     padding: 8,
// // //                     marginTop: 4,
// // //                     border: "1px solid #ccc",
// // //                     borderRadius: 4,
// // //                   }}
// // //                 />
// // //               </div>
// // //             ))}

// // //             <button
// // //               onClick={handleUpdate}
// // //               style={{
// // //                 background: "#3b82f6",
// // //                 color: "white",
// // //                 padding: "10px 15px",
// // //                 border: "none",
// // //                 borderRadius: 6,
// // //                 cursor: "pointer",
// // //                 marginTop: 10,
// // //               }}
// // //             >
// // //               Save Changes
// // //             </button>
// // //           </div>
// // //         )}

// // //         {/* Leave Applications */}
// // //         {activeTab === "leave" && (
// // //           <div
// // //             style={{
// // //               marginTop: 20,
// // //               background: "#fff",
// // //               padding: 20,
// // //               borderRadius: 8,
// // //             }}
// // //           >
// // //             <h2 style={{ fontSize: 20, marginBottom: 10 }}>Leave Application</h2>
// // //             <input
// // //               type="date"
// // //               name="fromDate"
// // //               value={leaveData.fromDate}
// // //               onChange={handleLeaveChange}
// // //               style={{ marginBottom: 10, padding: 8, width: "100%" }}
// // //             />
// // //             <input
// // //               type="date"
// // //               name="toDate"
// // //               value={leaveData.toDate}
// // //               onChange={handleLeaveChange}
// // //               style={{ marginBottom: 10, padding: 8, width: "100%" }}
// // //             />
// // //             <textarea
// // //               name="reason"
// // //               value={leaveData.reason}
// // //               onChange={handleLeaveChange}
// // //               placeholder="Reason"
// // //               style={{ marginBottom: 10, padding: 8, width: "100%" }}
// // //             />
// // //             <button
// // //               onClick={handleLeaveSubmit}
// // //               style={{
// // //                 background: "#3b82f6",
// // //                 color: "white",
// // //                 padding: "10px 15px",
// // //                 border: "none",
// // //                 borderRadius: 6,
// // //                 cursor: "pointer",
// // //               }}
// // //             >
// // //               Submit Leave
// // //             </button>

// // //             <h3 style={{ marginTop: 20 }}>Leave History</h3>
// // //             <ul>
// // //               {leaveHistory.map((leave) => (
// // //                 <li key={leave._id}>
// // //                   {leave.fromDate} → {leave.toDate} : {leave.reason} —{" "}
// // //                   <b>{leave.status}</b>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //         )}

// // //         {/* Meetings */}
// // //         {activeTab === "meetings" && (
// // //           <div
// // //             style={{
// // //               marginTop: 20,
// // //               background: "#fff",
// // //               padding: 20,
// // //               borderRadius: 8,
// // //             }}
// // //           >
// // //             <h2 style={{ fontSize: 20, marginBottom: 10 }}>Upcoming Meetings</h2>
// // //             {upcomingMeetings.length === 0 ? (
// // //               <p>No upcoming meetings</p>
// // //             ) : (
// // //               <ul>
// // //                 {upcomingMeetings.map((m) => (
// // //                   <li key={m._id}>
// // //                     {new Date(m.date).toLocaleString()} — {m.agenda}
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             )}

// // //             <h2 style={{ fontSize: 20, margin: "20px 0 10px" }}>Past Meetings</h2>
// // //             {passedMeetings.length === 0 ? (
// // //               <p>No past meetings</p>
// // //             ) : (
// // //               <ul>
// // //                 {passedMeetings.map((m) => (
// // //                   <li key={m._id}>
// // //                     {new Date(m.date).toLocaleString()} — {m.agenda}
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             )}
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import io from "socket.io-client";

// // const socket = io("http://localhost:5000");

// // export default function MenteeDashboard() {
// //   const navigate = useNavigate();
// //   const rollNumber = localStorage.getItem("rollNumber");
// //   const studentId = localStorage.getItem("studentId");

// //   const [student, setStudent] = useState(null);
// //   const [formData, setFormData] = useState({});
// //   const [activeTab, setActiveTab] = useState("update");

// //   const [leaveData, setLeaveData] = useState({
// //     fromDate: "",
// //     toDate: "",
// //     reason: "",
// //   });
// //   const [leaveHistory, setLeaveHistory] = useState([]);

// //   const [meetings, setMeetings] = useState([]);

// //   useEffect(() => {
// //     if (!studentId) {
// //       alert("No student ID found. Please log in again.");
// //       navigate("/login");
// //       return;
// //     }

// //     // Fetch student by roll number
// //     axios
// //       .get(`http://localhost:5000/api/students/roll/${rollNumber}`)
// //       .then((res) => {
// //         setStudent(res.data);
// //         setFormData({
// //           studentName: res.data.studentName || "",
// //           mentorName: res.data.mentorName || "",
// //           parentEmail: res.data.parentEmail || "",
// //           parentPhone: res.data.parentPhone || "",
// //           parentAddress: res.data.parentAddress || "",
// //           healthIssues: res.data.healthIssues || "",
// //           extracurricular: res.data.extracurricular || "",
// //           achievements: res.data.achievements || "",
// //           classAttendance: res.data.classAttendance || 0,
// //           backlogs: res.data.backlogs || 0,
// //           cgpa: res.data.cgpa || 0,
// //           meetingsAttended: res.data.meetingsAttended || 0,
// //         });
// //         localStorage.setItem("student", JSON.stringify(res.data));
// //       })
// //       .catch(() => {
// //         const cached = localStorage.getItem("student");
// //         if (cached) {
// //           const parsed = JSON.parse(cached);
// //           setStudent(parsed);
// //           setFormData(parsed);
// //         } else {
// //           alert("❌ Error loading student data");
// //         }
// //       });

// //     // Fetch leave history
// //     axios
// //       .get("http://localhost:5000/api/leave")
// //       .then((res) => {
// //         const myLeaves = res.data.filter((l) => l.menteeId === studentId);
// //         setLeaveHistory(myLeaves);
// //       })
// //       .catch(() => alert("❌ Error loading leave history"));

// //     // Fetch meetings
// //     axios
// //       .get("http://localhost:5000/api/meetings")
// //       .then((res) => setMeetings(res.data))
// //       .catch(() => {});

// //     // Socket listeners
// //     socket.on("leaveStatusUpdated", (updatedLeave) => {
// //       if (updatedLeave.menteeId === studentId) {
// //         setLeaveHistory((prev) =>
// //           prev.map((l) => (l._id === updatedLeave._id ? updatedLeave : l))
// //         );
// //       }
// //     });

// //     socket.on("newMeeting", (meeting) => {
// //       setMeetings((prev) => [meeting, ...prev]);
// //     });

// //     return () => {
// //       socket.off("leaveStatusUpdated");
// //       socket.off("newMeeting");
// //     };
// //   }, [navigate, studentId, rollNumber]);

// //   const handleChange = (e) =>
// //     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

// //   const handleUpdate = () => {
// //     if (!rollNumber) {
// //       alert("❌ No roll number found. Please log in again.");
// //       return;
// //     }

// //     const updateData = {
// //       ...formData,
// //       meetingsAttended: Number(formData.meetingsAttended),
// //       cgpa: Number(formData.cgpa),
// //       classAttendance: Number(formData.classAttendance),
// //       backlogs: Number(formData.backlogs),
// //     };

// //     axios
// //       .put(`http://localhost:5000/api/students/roll/${rollNumber}`, updateData)
// //       .then((res) => {
// //         alert("✅ Information updated successfully!");
// //         setStudent(res.data);
// //         localStorage.setItem("student", JSON.stringify(res.data));
// //       })
// //       .catch((err) => {
// //         console.error("Update error:", err.response?.data || err.message);
// //         alert("❌ Error updating info");
// //       });
// //   };

// //   const handleLeaveChange = (e) =>
// //     setLeaveData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

// //   const handleLeaveSubmit = () => {
// //     if (!leaveData.fromDate || !leaveData.toDate || !leaveData.reason) {
// //       return alert("Please fill all leave fields");
// //     }

// //     axios
// //       .post("http://localhost:5000/api/leave", {
// //         menteeId: studentId,
// //         menteeName: student?.rollNumber,
// //         ...leaveData,
// //       })
// //       .then((res) => {
// //         alert("✅ Leave request submitted!");
// //         setLeaveData({ fromDate: "", toDate: "", reason: "" });
// //         setLeaveHistory((prev) => [res.data.leave, ...prev]);
// //       })
// //       .catch(() => alert("❌ Error submitting leave request"));
// //   };

// //   if (!student) return <p style={{ padding: "20px" }}>Loading...</p>;

// //   const now = new Date();
// //   const upcomingMeetings = meetings
// //     .filter((m) => new Date(m.date) >= now)
// //     .sort((a, b) => new Date(a.date) - new Date(b.date));
// //   const passedMeetings = meetings
// //     .filter((m) => new Date(m.date) < now)
// //     .sort((a, b) => new Date(b.date) - new Date(a.date));

// //   return (
// //     <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
// //       {/* Sidebar */}
// //       <div
// //         style={{
// //           width: "260px",
// //           background: "#1e293b",
// //           color: "white",
// //           padding: "15px",
// //           fontWeight: "bold",
// //           boxShadow: "2px 0px 8px rgba(0,0,0,0.2)",
// //         }}
// //       >
// //         <h2 style={{ marginBottom: "20px", fontSize: "20px" }}>Mentee Dashboard</h2>
// //         <ul style={{ listStyle: "none", padding: 0 }}>
// //           <li
// //             onClick={() => setActiveTab("update")}
// //             style={{
// //               padding: "10px",
// //               background: activeTab === "update" ? "#3b82f6" : "transparent",
// //               borderRadius: "6px",
// //               cursor: "pointer",
// //             }}
// //           >
// //             Update Info
// //           </li>
// //           <li
// //             onClick={() => setActiveTab("leave")}
// //             style={{
// //               padding: "10px",
// //               background: activeTab === "leave" ? "#3b82f6" : "transparent",
// //               borderRadius: "6px",
// //               marginTop: "10px",
// //               cursor: "pointer",
// //             }}
// //           >
// //             Leave Application & Status
// //           </li>
// //           <li
// //             onClick={() => setActiveTab("meetings")}
// //             style={{
// //               padding: "10px",
// //               background: activeTab === "meetings" ? "#3b82f6" : "transparent",
// //               borderRadius: "6px",
// //               marginTop: "10px",
// //               cursor: "pointer",
// //             }}
// //           >
// //             Meeting Announcements
// //           </li>
// //         </ul>
// //       </div>

// //       {/* Main */}
// //       <div
// //         style={{
// //           flex: 1,
// //           padding: "20px",
// //           background: "#f8fafc",
// //           color: "#111",
// //           overflowY: "auto",
// //         }}
// //       >
// //         <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>Welcome, {rollNumber}</h1>

// //         {/* Update Info */}
// //         {activeTab === "update" && (
// //           <div
// //             style={{
// //               marginTop: 20,
// //               background: "#fff",
// //               padding: 20,
// //               borderRadius: 8,
// //             }}
// //           >
// //             <h2 style={{ fontSize: 20, marginBottom: 10 }}>Edit Your Information</h2>

// //             {[
// //               "studentName",
// //               "mentorName",
// //               "parentEmail",
// //               "parentPhone",
// //               "parentAddress",
// //               "healthIssues",
// //               "extracurricular",
// //               "achievements",
// //               "classAttendance",
// //               "backlogs",
// //               "cgpa",
// //               "meetingsAttended",
// //             ].map((field) => (
// //               <div key={field} style={{ marginBottom: 10 }}>
// //                 <label style={{ fontWeight: "bold", display: "block" }}>
// //                   {field.charAt(0).toUpperCase() + field.slice(1)}
// //                 </label>
// //                 <input
// //                   name={field}
// //                   type={typeof formData[field] === "number" ? "number" : "text"}
// //                   value={formData[field] || ""}
// //                   onChange={handleChange}
// //                   style={{
// //                     display: "block",
// //                     width: "100%",
// //                     padding: 8,
// //                     marginTop: 4,
// //                     border: "1px solid #ccc",
// //                     borderRadius: 4,
// //                   }}
// //                 />
// //               </div>
// //             ))}

// //             <button
// //               onClick={handleUpdate}
// //               disabled={!student}
// //               style={{
// //                 background: "#3b82f6",
// //                 color: "white",
// //                 padding: "10px 15px",
// //                 border: "none",
// //                 borderRadius: 6,
// //                 cursor: !student ? "not-allowed" : "pointer",
// //                 opacity: !student ? 0.6 : 1,
// //                 marginTop: 10,
// //               }}
// //             >
// //               Save Changes
// //             </button>
// //           </div>
// //         )}

// //         {/* Leave Applications */}
// //         {activeTab === "leave" && (
// //           <div
// //             style={{
// //               marginTop: 20,
// //               background: "#fff",
// //               padding: 20,
// //               borderRadius: 8,
// //             }}
// //           >
// //             <h2 style={{ fontSize: 20, marginBottom: 10 }}>Leave Application</h2>
// //             <input
// //               type="date"
// //               name="fromDate"
// //               value={leaveData.fromDate}
// //               onChange={handleLeaveChange}
// //               style={{ marginBottom: 10, padding: 8, width: "100%" }}
// //             />
// //             <input
// //               type="date"
// //               name="toDate"
// //               value={leaveData.toDate}
// //               onChange={handleLeaveChange}
// //               style={{ marginBottom: 10, padding: 8, width: "100%" }}
// //             />
// //             <textarea
// //               name="reason"
// //               value={leaveData.reason}
// //               onChange={handleLeaveChange}
// //               placeholder="Reason"
// //               style={{ marginBottom: 10, padding: 8, width: "100%" }}
// //             />
// //             <button
// //               onClick={handleLeaveSubmit}
// //               style={{
// //                 background: "#3b82f6",
// //                 color: "white",
// //                 padding: "10px 15px",
// //                 border: "none",
// //                 borderRadius: 6,
// //                 cursor: "pointer",
// //               }}
// //             >
// //               Submit Leave
// //             </button>

// //             <h3 style={{ marginTop: 20 }}>Leave History</h3>
// //             <ul>
// //               {leaveHistory.map((leave) => (
// //                 <li key={leave._id}>
// //                   {leave.fromDate} → {leave.toDate} : {leave.reason} —{" "}
// //                   <b>{leave.status}</b>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         )}

// //         {/* Meetings */}
// //         {activeTab === "meetings" && (
// //           <div
// //             style={{
// //               marginTop: 20,
// //               background: "#fff",
// //               padding: 20,
// //               borderRadius: 8,
// //             }}
// //           >
// //             <h2 style={{ fontSize: 20, marginBottom: 10 }}>Upcoming Meetings</h2>
// //             {upcomingMeetings.length === 0 ? (
// //               <p>No upcoming meetings</p>
// //             ) : (
// //               <ul>
// //                 {upcomingMeetings.map((m) => (
// //                   <li key={m._id}>
// //                     {new Date(m.date).toLocaleString()} — {m.agenda}
// //                   </li>
// //                 ))}
// //               </ul>
// //             )}

// //             <h2 style={{ fontSize: 20, margin: "20px 0 10px" }}>Past Meetings</h2>
// //             {passedMeetings.length === 0 ? (
// //               <p>No past meetings</p>
// //             ) : (
// //               <ul>
// //                 {passedMeetings.map((m) => (
// //                   <li key={m._id}>
// //                     {new Date(m.date).toLocaleString()} — {m.agenda}
// //                   </li>
// //                 ))}
// //               </ul>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }



// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import io from "socket.io-client";

// const socket = io("http://localhost:5000");

// export default function MenteeDashboard() {
//   const navigate = useNavigate();
//   const rollNumber = localStorage.getItem("rollNumber");
//   const studentId = localStorage.getItem("studentId");

//   const [student, setStudent] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [activeTab, setActiveTab] = useState("update");

//   const [leaveData, setLeaveData] = useState({
//     fromDate: "",
//     toDate: "",
//     reason: "",
//   });
//   const [leaveHistory, setLeaveHistory] = useState([]);

//   const [meetings, setMeetings] = useState([]);

//   useEffect(() => {
//     if (!studentId) {
//       alert("No student ID found. Please log in again.");
//       navigate("/login");
//       return;
//     }

//     // Fetch student by roll number
//     axios
//       .get(`http://localhost:5000/api/students/roll/${rollNumber}`)
//       .then((res) => {
//         setStudent(res.data);
//         setFormData({
//           studentName: res.data.studentName || "",
//           mentorName: res.data.mentorName || "",
//           parentEmail: res.data.parentEmail || "",
//           parentPhone: res.data.parentPhone || "",
//           parentAddress: res.data.parentAddress || "",
//           healthIssues: res.data.healthIssues || "",
//           extracurricular: res.data.extracurricular || "",
//           achievements: res.data.achievements || "",
//           classAttendance: res.data.classAttendance || 0,
//           backlogs: res.data.backlogs || 0,
//           cgpa: res.data.cgpa || 0,
//           meetingsAttended: res.data.meetingsAttended || 0,
//         });
//         localStorage.setItem("student", JSON.stringify(res.data));
//       })
//       .catch(() => {
//         const cached = localStorage.getItem("student");
//         if (cached) {
//           const parsed = JSON.parse(cached);
//           setStudent(parsed);
//           setFormData(parsed);
//         } else {
//           alert("❌ Error loading student data");
//         }
//       });

//     // Fetch leave history
//     axios
//       .get("http://localhost:5000/api/leave")
//       .then((res) => {
//         const myLeaves = res.data.filter((l) => l.menteeId === studentId);
//         setLeaveHistory(myLeaves);
//       })
//       .catch(() => alert("❌ Error loading leave history"));

//     // Fetch meetings
//     axios
//       .get("http://localhost:5000/api/meetings")
//       .then((res) => setMeetings(res.data))
//       .catch(() => {});

//     // Socket listeners
//     socket.on("leaveStatusUpdated", (updatedLeave) => {
//       if (updatedLeave.menteeId === studentId) {
//         setLeaveHistory((prev) =>
//           prev.map((l) => (l._id === updatedLeave._id ? updatedLeave : l))
//         );
//       }
//     });

//     socket.on("newMeeting", (meeting) => {
//       setMeetings((prev) => [meeting, ...prev]);
//     });

//     return () => {
//       socket.off("leaveStatusUpdated");
//       socket.off("newMeeting");
//     };
//   }, [navigate, studentId, rollNumber]);

//   const handleChange = (e) =>
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleUpdate = () => {
//     if (!rollNumber) {
//       alert("❌ No roll number found. Please log in again.");
//       return;
//     }

//     const updateData = {
//       ...formData,
//       meetingsAttended: Number(formData.meetingsAttended),
//       cgpa: Number(formData.cgpa),
//       classAttendance: Number(formData.classAttendance),
//       backlogs: Number(formData.backlogs),
//     };

//     axios
//       .put(`http://localhost:5000/api/students/roll/${rollNumber}`, updateData)
//       .then((res) => {
//         alert("✅ Information updated successfully!");
//         setStudent(res.data);
//         localStorage.setItem("student", JSON.stringify(res.data));
//       })
//       .catch((err) => {
//         console.error("Update error:", err.response?.data || err.message);
//         alert("❌ Error updating info");
//       });
//   };

//   const handleLeaveChange = (e) =>
//     setLeaveData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleLeaveSubmit = () => {
//     if (!leaveData.fromDate || !leaveData.toDate || !leaveData.reason) {
//       return alert("Please fill all leave fields");
//     }

//     axios
//       .post("http://localhost:5000/api/leave", {
//         menteeId: studentId,
//         menteeName: student?.rollNumber,
//         ...leaveData,
//       })
//       .then((res) => {
//         alert("✅ Leave request submitted!");
//         setLeaveData({ fromDate: "", toDate: "", reason: "" });
//         setLeaveHistory((prev) => [res.data.leave, ...prev]);
//       })
//       .catch(() => alert("❌ Error submitting leave request"));
//   };

//   if (!student) return <p style={{ padding: "20px" }}>Loading...</p>;

//   const now = new Date();
//   const upcomingMeetings = meetings
//     .filter((m) => new Date(m.date) >= now)
//     .sort((a, b) => new Date(a.date) - new Date(b.date));
//   const passedMeetings = meetings
//     .filter((m) => new Date(m.date) < now)
//     .sort((a, b) => new Date(b.date) - new Date(a.date));

//   return (
//     <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
//       {/* Sidebar */}
//       <div
//         style={{
//           width: "260px",
//           background: "#1e293b",
//           color: "white",
//           padding: "15px",
//           fontWeight: "bold",
//           boxShadow: "2px 0px 8px rgba(0,0,0,0.2)",
//         }}
//       >
//         <h2 style={{ marginBottom: "20px", fontSize: "20px" }}>
//           Mentee Dashboard
//         </h2>
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           <li
//             onClick={() => setActiveTab("update")}
//             style={{
//               padding: "10px",
//               background: activeTab === "update" ? "#3b82f6" : "transparent",
//               borderRadius: "6px",
//               cursor: "pointer",
//             }}
//           >
//             Update Info
//           </li>
//           <li
//             onClick={() => setActiveTab("leave")}
//             style={{
//               padding: "10px",
//               background: activeTab === "leave" ? "#3b82f6" : "transparent",
//               borderRadius: "6px",
//               marginTop: "10px",
//               cursor: "pointer",
//             }}
//           >
//             Leave Application & Status
//           </li>
//           <li
//             onClick={() => setActiveTab("meetings")}
//             style={{
//               padding: "10px",
//               background: activeTab === "meetings" ? "#3b82f6" : "transparent",
//               borderRadius: "6px",
//               marginTop: "10px",
//               cursor: "pointer",
//             }}
//           >
//             Meeting Announcements
//           </li>
//         </ul>
//       </div>

//       {/* Main */}
//       <div
//         style={{
//           flex: 1,
//           padding: "20px",
//           background: "#f8fafc",
//           color: "#111",
//           overflowY: "auto",
//         }}
//       >
//         <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
//           Welcome, {rollNumber}
//         </h1>

//         {/* Update Info */}
//         {activeTab === "update" && (
//           <div
//             style={{
//               marginTop: 20,
//               background: "#fff",
//               padding: 20,
//               borderRadius: 8,
//             }}
//           >
//             <h2 style={{ fontSize: 20, marginBottom: 10 }}>
//               Edit Your Information
//             </h2>

//             {[
//               "studentName",
//               "mentorName",
//               "parentEmail",
//               "parentPhone",
//               "parentAddress",
//               "healthIssues",
//               "extracurricular",
//               "achievements",
//               "classAttendance",
//               "backlogs",
//               "cgpa",
//               "meetingsAttended",
//             ].map((field) => (
//               <div key={field} style={{ marginBottom: 10 }}>
//                 <label style={{ fontWeight: "bold", display: "block" }}>
//                   {field.charAt(0).toUpperCase() + field.slice(1)}
//                 </label>
//                 <input
//                   name={field}
//                   type={typeof formData[field] === "number" ? "number" : "text"}
//                   value={formData[field] || ""}
//                   onChange={handleChange}
//                   style={{
//                     display: "block",
//                     width: "100%",
//                     padding: 8,
//                     marginTop: 4,
//                     border: "1px solid #ccc",
//                     borderRadius: 4,
//                   }}
//                 />
//               </div>
//             ))}

//             <button
//               onClick={handleUpdate}
//               disabled={!student}
//               style={{
//                 background: "#3b82f6",
//                 color: "white",
//                 padding: "10px 15px",
//                 border: "none",
//                 borderRadius: 6,
//                 cursor: !student ? "not-allowed" : "pointer",
//                 opacity: !student ? 0.6 : 1,
//                 marginTop: 10,
//               }}
//             >
//               Save Changes
//             </button>
//           </div>
//         )}

//         {/* Leave Applications */}
//         {activeTab === "leave" && (
//           <div
//             style={{
//               marginTop: 20,
//               background: "#fff",
//               padding: 20,
//               borderRadius: 8,
//             }}
//           >
//             <h2 style={{ fontSize: 20, marginBottom: 10 }}>Leave Application</h2>
//             <input
//               type="date"
//               name="fromDate"
//               value={leaveData.fromDate}
//               onChange={handleLeaveChange}
//               style={{ marginBottom: 10, padding: 8, width: "100%" }}
//             />
//             <input
//               type="date"
//               name="toDate"
//               value={leaveData.toDate}
//               onChange={handleLeaveChange}
//               style={{ marginBottom: 10, padding: 8, width: "100%" }}
//             />
//             <textarea
//               name="reason"
//               value={leaveData.reason}
//               onChange={handleLeaveChange}
//               placeholder="Reason"
//               style={{ marginBottom: 10, padding: 8, width: "100%" }}
//             />
//             <button
//               onClick={handleLeaveSubmit}
//               style={{
//                 background: "#3b82f6",
//                 color: "white",
//                 padding: "10px 15px",
//                 border: "none",
//                 borderRadius: 6,
//                 cursor: "pointer",
//               }}
//             >
//               Submit Leave
//             </button>

//             <h3
//               style={{
//                 marginTop: 20,
//                 fontSize: "22px",
//                 fontWeight: "600",
//                 color: "#1e293b",
//               }}
//             >
//               Leave History
//             </h3>
//             <div style={{ marginTop: 10 }}>
//               {leaveHistory.length === 0 ? (
//                 <p style={{ color: "#64748b", fontStyle: "italic" }}>
//                   No leave records found
//                 </p>
//               ) : (
//                 <ul style={{ listStyle: "none", padding: 0 }}>
//                   {leaveHistory.map((leave) => {
//                     let statusColor =
//                       leave.status === "Approved"
//                         ? "#dcfce7" // light green
//                         : leave.status === "Rejected"
//                         ? "#fee2e2" // light red
//                         : "#fef9c3"; // light yellow

//                     let textColor =
//                       leave.status === "Approved"
//                         ? "#166534"
//                         : leave.status === "Rejected"
//                         ? "#991b1b"
//                         : "#854d0e";

//                     return (
//                       <li
//                         key={leave._id}
//                         style={{
//                           background: "#f8fafc",
//                           borderLeft: `6px solid ${textColor}`,
//                           marginBottom: "12px",
//                           padding: "12px 16px",
//                           borderRadius: "8px",
//                           fontFamily: "Segoe UI, sans-serif",
//                           boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
//                         }}
//                       >
//                         <div style={{ fontSize: "14px", color: "#475569" }}>
//                           <b>From:</b>{" "}
//                           {new Date(leave.fromDate).toLocaleDateString()} <br />
//                           <b>To:</b>{" "}
//                           {new Date(leave.toDate).toLocaleDateString()}
//                         </div>

//                         <div
//                           style={{
//                             marginTop: "6px",
//                             fontSize: "15px",
//                             color: "#1e293b",
//                           }}
//                         >
//                           <b>Reason:</b> {leave.reason}
//                         </div>

//                         {/* Status Badge */}
//                         <div
//                           style={{
//                             marginTop: "10px",
//                             display: "inline-block",
//                             background: statusColor,
//                             color: textColor,
//                             padding: "4px 10px",
//                             borderRadius: "20px",
//                             fontSize: "13px",
//                             fontWeight: "600",
//                           }}
//                         >
//                           {leave.status}
//                         </div>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Meetings */}
//         {activeTab === "meetings" && (
//           <div
//             style={{
//               marginTop: 20,
//               background: "#fff",
//               padding: 20,
//               borderRadius: 8,
//             }}
//           >
//             <h2 style={{ fontSize: 20, marginBottom: 10 }}>Upcoming Meetings</h2>
//             {upcomingMeetings.length === 0 ? (
//               <p>No upcoming meetings</p>
//             ) : (
//               <ul>
//                 {upcomingMeetings.map((m) => (
//                   <li key={m._id}>
//                     {new Date(m.date).toLocaleString()} — {m.agenda}
//                   </li>
//                 ))}
//               </ul>
//             )}

//             <h2 style={{ fontSize: 20, margin: "20px 0 10px" }}>Past Meetings</h2>
//             {passedMeetings.length === 0 ? (
//               <p>No past meetings</p>
//             ) : (
//               <ul>
//                 {passedMeetings.map((m) => (
//                   <li key={m._id}>
//                     {new Date(m.date).toLocaleString()} — {m.agenda}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function MenteeDashboard() {
  const navigate = useNavigate();
  const rollNumber = localStorage.getItem("rollNumber");
  const studentId = localStorage.getItem("studentId");

  const [student, setStudent] = useState(null);
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState("update");

  const [leaveData, setLeaveData] = useState({
    fromDate: "",
    toDate: "",
    reason: "",
  });
  const [leaveHistory, setLeaveHistory] = useState([]);

  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    if (!studentId) {
      alert("No student ID found. Please log in again.");
      navigate("/login");
      return;
    }

    // Fetch student by roll number
    axios
      .get(`http://localhost:5000/api/students/roll/${rollNumber}`)
      .then((res) => {
        setStudent(res.data);
        setFormData({
          studentName: res.data.studentName || "",
          mentorName: res.data.mentorName || "",
          parentEmail: res.data.parentEmail || "",
          parentPhone: res.data.parentPhone || "",
          parentAddress: res.data.parentAddress || "",
          healthIssues: res.data.healthIssues || "",
          extracurricular: res.data.extracurricular || "",
          achievements: res.data.achievements || "",
          classAttendance: res.data.classAttendance || 0,
          backlogs: res.data.backlogs || 0,
          cgpa: res.data.cgpa || 0,
          meetingsAttended: res.data.meetingsAttended || 0,
        });
        localStorage.setItem("student", JSON.stringify(res.data));
      })
      .catch(() => {
        const cached = localStorage.getItem("student");
        if (cached) {
          const parsed = JSON.parse(cached);
          setStudent(parsed);
          setFormData(parsed);
        } else {
          alert("❌ Error loading student data");
        }
      });

    // Fetch leave history
    axios
      .get("http://localhost:5000/api/leave")
      .then((res) => {
        const myLeaves = res.data.filter((l) => l.menteeId === studentId);
        setLeaveHistory(myLeaves);
      })
      .catch(() => alert("❌ Error loading leave history"));

    // Fetch meetings
    axios
      .get("http://localhost:5000/api/meetings")
      .then((res) => setMeetings(res.data))
      .catch(() => {});

    // Socket listeners
    socket.on("leaveStatusUpdated", (updatedLeave) => {
      if (updatedLeave.menteeId === studentId) {
        setLeaveHistory((prev) =>
          prev.map((l) => (l._id === updatedLeave._id ? updatedLeave : l))
        );
      }
    });

    socket.on("newMeeting", (meeting) => {
      setMeetings((prev) => [meeting, ...prev]);
    });

    return () => {
      socket.off("leaveStatusUpdated");
      socket.off("newMeeting");
    };
  }, [navigate, studentId, rollNumber]);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleUpdate = () => {
    if (!rollNumber) {
      alert("❌ No roll number found. Please log in again.");
      return;
    }

    const updateData = {
      ...formData,
      meetingsAttended: Number(formData.meetingsAttended),
      cgpa: Number(formData.cgpa),
      classAttendance: Number(formData.classAttendance),
      backlogs: Number(formData.backlogs),
    };

    axios
      .put(`http://localhost:5000/api/students/roll/${rollNumber}`, updateData)
      .then((res) => {
        alert("✅ Information updated successfully!");
        setStudent(res.data);
        localStorage.setItem("student", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.error("Update error:", err.response?.data || err.message);
        alert("❌ Error updating info");
      });
  };

  const handleLeaveChange = (e) =>
    setLeaveData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleLeaveSubmit = () => {
    if (!leaveData.fromDate || !leaveData.toDate || !leaveData.reason) {
      return alert("Please fill all leave fields");
    }

    axios
      .post("http://localhost:5000/api/leave", {
        menteeId: studentId,
        menteeName: student?.rollNumber,
        ...leaveData,
      })
      .then((res) => {
        alert("✅ Leave request submitted!");
        setLeaveData({ fromDate: "", toDate: "", reason: "" });
        setLeaveHistory((prev) => [res.data.leave, ...prev]);
      })
      .catch(() => alert("❌ Error submitting leave request"));
  };

  if (!student) return <p style={{ padding: "20px" }}>Loading...</p>;

  const now = new Date();
  const upcomingMeetings = meetings
    .filter((m) => new Date(m.date) >= now)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  const passedMeetings = meetings
    .filter((m) => new Date(m.date) < now)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "260px",
          background: "#1e293b",
          color: "white",
          padding: "15px",
          fontWeight: "bold",
          boxShadow: "2px 0px 8px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "20px" }}>
          Mentee Dashboard
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li
            onClick={() => setActiveTab("update")}
            style={{
              padding: "10px",
              background: activeTab === "update" ? "#3b82f6" : "transparent",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Update Info
          </li>
          <li
            onClick={() => setActiveTab("leave")}
            style={{
              padding: "10px",
              background: activeTab === "leave" ? "#3b82f6" : "transparent",
              borderRadius: "6px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Leave Application & Status
          </li>
          <li
            onClick={() => setActiveTab("meetings")}
            style={{
              padding: "10px",
              background: activeTab === "meetings" ? "#3b82f6" : "transparent",
              borderRadius: "6px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Meeting Announcements
          </li>
        </ul>
      </div>

      {/* Main */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          background: "#f8fafc",
          color: "#111",
          overflowY: "auto",
        }}
      >
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
          Welcome, {rollNumber}
        </h1>

        {/* Update Info */}
        {activeTab === "update" && (
          <div
            style={{
              marginTop: 20,
              background: "#fff",
              padding: 20,
              borderRadius: 8,
            }}
          >
            <h2 style={{ fontSize: 20, marginBottom: 10 }}>
              Edit Your Information
            </h2>

            {[
              "studentName",
              "mentorName",
              "parentEmail",
              "parentPhone",
              "parentAddress",
              "healthIssues",
              "extracurricular",
              "achievements",
              "classAttendance",
              "backlogs",
              "cgpa",
              "meetingsAttended",
            ].map((field) => (
              <div key={field} style={{ marginBottom: 10 }}>
                <label style={{ fontWeight: "bold", display: "block" }}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  name={field}
                  type={typeof formData[field] === "number" ? "number" : "text"}
                  value={formData[field] || ""}
                  onChange={handleChange}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: 8,
                    marginTop: 4,
                    border: "1px solid #ccc",
                    borderRadius: 4,
                  }}
                />
              </div>
            ))}

            <button
              onClick={handleUpdate}
              disabled={!student}
              style={{
                background: "#3b82f6",
                color: "white",
                padding: "10px 15px",
                border: "none",
                borderRadius: 6,
                cursor: !student ? "not-allowed" : "pointer",
                opacity: !student ? 0.6 : 1,
                marginTop: 10,
              }}
            >
              Save Changes
            </button>
          </div>
        )}

        {/* Leave Applications */}
        {activeTab === "leave" && (
          <div
            style={{
              marginTop: 20,
              background: "#fff",
              padding: 20,
              borderRadius: 8,
            }}
          >
            <h2 style={{ fontSize: 20, marginBottom: 10 }}>Leave Application</h2>
            <input
              type="date"
              name="fromDate"
              value={leaveData.fromDate}
              onChange={handleLeaveChange}
              style={{ marginBottom: 10, padding: 8, width: "100%" }}
            />
            <input
              type="date"
              name="toDate"
              value={leaveData.toDate}
              onChange={handleLeaveChange}
              style={{ marginBottom: 10, padding: 8, width: "100%" }}
            />
            <textarea
              name="reason"
              value={leaveData.reason}
              onChange={handleLeaveChange}
              placeholder="Reason"
              style={{ marginBottom: 10, padding: 8, width: "100%" }}
            />
            <button
              onClick={handleLeaveSubmit}
              style={{
                background: "#3b82f6",
                color: "white",
                padding: "10px 15px",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              Submit Leave
            </button>

            <h3
              style={{
                marginTop: 20,
                fontSize: "22px",
                fontWeight: "600",
                color: "#1e293b",
              }}
            >
              Leave History
            </h3>
            <div style={{ marginTop: 10 }}>
              {leaveHistory.length === 0 ? (
                <p style={{ color: "#64748b", fontStyle: "italic" }}>
                  No leave records found
                </p>
              ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {leaveHistory.map((leave) => {
                    let statusColor =
                      leave.status === "Approved"
                        ? "#dcfce7" // light green
                        : leave.status === "Rejected"
                        ? "#fee2e2" // light red
                        : "#fef9c3"; // light yellow

                    let textColor =
                      leave.status === "Approved"
                        ? "#166534"
                        : leave.status === "Rejected"
                        ? "#991b1b"
                        : "#854d0e";

                    return (
                      <li
                        key={leave._id}
                        style={{
                          background: "#f8fafc",
                          borderLeft: `6px solid ${textColor}`,
                          marginBottom: "12px",
                          padding: "12px 16px",
                          borderRadius: "8px",
                          fontFamily: "Segoe UI, sans-serif",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                        }}
                      >
                        <div style={{ fontSize: "14px", color: "#475569" }}>
                          <b>From:</b>{" "}
                          {new Date(leave.fromDate).toLocaleDateString()} <br />
                          <b>To:</b>{" "}
                          {new Date(leave.toDate).toLocaleDateString()}
                        </div>

                        <div
                          style={{
                            marginTop: "6px",
                            fontSize: "15px",
                            color: "#1e293b",
                          }}
                        >
                          <b>Reason:</b> {leave.reason}
                        </div>

                        {/* Status Badge */}
                        <div
                          style={{
                            marginTop: "10px",
                            display: "inline-block",
                            background: statusColor,
                            color: textColor,
                            padding: "4px 10px",
                            borderRadius: "20px",
                            fontSize: "13px",
                            fontWeight: "600",
                          }}
                        >
                          {leave.status}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        )}

        {/* Meetings */}
        {activeTab === "meetings" && (
          <div
            style={{
              marginTop: 20,
              background: "#fff",
              padding: 20,
              borderRadius: 8,
            }}
          >
            <h2 style={{ fontSize: 22, marginBottom: 15, color: "#1e293b" }}>
              Upcoming Meetings
            </h2>
            {upcomingMeetings.length === 0 ? (
              <p style={{ color: "#475569" }}>No upcoming meetings</p>
            ) : (
              <ul style={{ listStyle: "none", padding: 0 }}>
                {upcomingMeetings.map((m) => (
                  <li
                    key={m._id}
                    style={{
                      background: "#fef9c3", // light yellow
                      borderLeft: "6px solid #ca8a04",
                      marginBottom: "12px",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                    }}
                  >
                    <div style={{ fontSize: "15px", color: "#1e293b" }}>
                      <b>Date:</b> {new Date(m.date).toLocaleString()}
                    </div>
                    <div style={{ marginTop: "6px", color: "#1e293b" }}>
                      <b>Agenda:</b> {m.agenda}
                    </div>
                    <div style={{ marginTop: "6px", color: "#334155" }}>
                      <b>Description:</b> {m.description || "No details"}
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <h2
              style={{
                fontSize: 22,
                margin: "20px 0 15px",
                color: "#1e293b",
              }}
            >
              Past Meetings
            </h2>
            {passedMeetings.length === 0 ? (
              <p style={{ color: "#475569" }}>No past meetings</p>
            ) : (
              <ul style={{ listStyle: "none", padding: 0 }}>
                {passedMeetings.map((m) => (
                  <li
                    key={m._id}
                    style={{
                      background: "#fee2e2", // light red
                      borderLeft: "6px solid #b91c1c",
                      marginBottom: "12px",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                    }}
                  >
                    <div style={{ fontSize: "15px", color: "#1e293b" }}>
                      <b>Date:</b> {new Date(m.date).toLocaleString()}
                    </div>
                    <div style={{ marginTop: "6px", color: "#1e293b" }}>
                      <b>Agenda:</b> {m.agenda}
                    </div>
                    <div style={{ marginTop: "6px", color: "#334155" }}>
                      <b>Description:</b> {m.description || "No details"}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
