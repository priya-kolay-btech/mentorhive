


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Login() {
//   const [rollNumber, setRollNumber] = useState("");
//   const [password, setPassword] = useState(""); // optional if backend requires it
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     if (!rollNumber) {
//       alert("Please enter your Roll Number");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/api/students/login", {
//         rollNumber: rollNumber.trim().toUpperCase(),
//         password // send only if backend expects it
//       });

//       if (!res.data || !res.data.student) {
//         alert("❌ Invalid login details");
//         return;
//       }

//       // ✅ Save rollNumber & student ID for dashboard
//       localStorage.setItem("rollNumber", res.data.student.rollNumber);
//       localStorage.setItem("studentId", res.data.student._id);

//       // ✅ Redirect to mentee dashboard
//       navigate("/mentee");
//     } catch (err) {
//       console.error("Login error:", err.response?.data || err.message);
//       alert(err.response?.data?.message || "❌ Login failed. Please try again.");
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "#f8fafc",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center"
//       }}
//     >
//       <div
//         style={{
//           background: "#fff",
//           padding: "20px",
//           borderRadius: "8px",
//           boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//           width: "300px"
//         }}
//       >
//         <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//           Mentee Login
//         </h2>

//         <input
//           type="text"
//           placeholder="Enter your Roll Number"
//           value={rollNumber}
//           onChange={(e) => setRollNumber(e.target.value)}
//           style={{
//             width: "100%",
//             padding: "8px",
//             marginBottom: "10px",
//             border: "1px solid #ccc",
//             borderRadius: "5px"
//           }}
//         />

        

//         <button
//           onClick={handleLogin}
//           style={{
//             width: "100%",
//             background: "#3b82f6",
//             color: "#fff",
//             padding: "10px",
//             border: "none",
//             borderRadius: "6px",
//             cursor: "pointer"
//           }}
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }




// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // export default function Login() {
// //   const [rollNumber, setRollNumber] = useState("");
// //   const [password, setPassword] = useState(""); // optional if backend requires it
// //   const navigate = useNavigate();

// //   const handleLogin = async () => {
// //     if (!rollNumber) {
// //       alert("Please enter your Roll Number");
// //       return;
// //     }

// //     try {
// //       const res = await axios.post("http://localhost:5000/api/students/login", {
// //         rollNumber: rollNumber.trim().toUpperCase(),
// //         password
// //       });

// //       // Check if login was successful
// //       if (!res.data || !res.data.student) {
// //         alert("❌ Invalid login details");
// //         return;
// //       }

// //       // Save student info locally
// //       localStorage.setItem("rollNumber", res.data.student.rollNumber);
// //       localStorage.setItem("studentId", res.data.student._id);

// //       // Navigate to mentee dashboard
// //       navigate("/mentee");
// //     } catch (err) {
// //       // Better error logging
// //       console.error("Login error:", JSON.stringify(err.response?.data, null, 2));
// //       alert(err.response?.data?.message || "❌ Login failed. Please try again.");
// //     }
// //   };

// //   return (
// //     <div
// //       style={{
// //         minHeight: "100vh",
// //         background: "#f8fafc",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "center"
// //       }}
// //     >
// //       <div
// //         style={{
// //           background: "#fff",
// //           padding: "20px",
// //           borderRadius: "8px",
// //           boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
// //           width: "300px"
// //         }}
// //       >
// //         <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
// //           Mentee Login
// //         </h2>

// //         <input
// //           type="text"
// //           placeholder="Enter your Roll Number"
// //           value={rollNumber}
// //           onChange={(e) => setRollNumber(e.target.value)}
// //           style={{
// //             width: "100%",
// //             padding: "8px",
// //             marginBottom: "10px",
// //             border: "1px solid #ccc",
// //             borderRadius: "5px"
// //           }}
// //         />

// //         <button
// //           onClick={handleLogin}
// //           style={{
// //             width: "100%",
// //             background: "#3b82f6",
// //             color: "#fff",
// //             padding: "10px",
// //             border: "none",
// //             borderRadius: "6px",
// //             cursor: "pointer"
// //           }}
// //         >
// //           Login
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Login() {
//   const [rollNumber, setRollNumber] = useState("");
//   const [password, setPassword] = useState(""); // optional
//   const [role, setRole] = useState("mentee"); // default role
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     if (!rollNumber) {
//       alert("Please enter your Roll Number");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/api/students/login", {
//         rollNumber: rollNumber.trim().toUpperCase(),
//         password,role // send only if backend expects it
//       });

//       if (!res.data || !res.data.student) {
//         alert("❌ Invalid login details");
//         return;
//       }

//       // Save rollNumber & student ID
//       localStorage.setItem("rollNumber", res.data.student.rollNumber);
//       localStorage.setItem("studentId", res.data.student._id);
//       localStorage.setItem("role", role); // save role

//       // Redirect based on role
//       if (role === "mentor") {
//         navigate("/mentor");
//       } else {
//         navigate("/mentee");
//       }

//     } catch (err) {
//       console.error("Login error:", err.response?.data || err.message);
//       alert(err.response?.data?.message || "❌ Login failed. Please try again.");
//     }
//   };

//   return (
//     <div style={{ minHeight: "100vh", background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center" }}>
//       <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", width: "300px" }}>
//         <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
//         <input
//           type="text"
//           placeholder="Enter your Roll Number"
//           value={rollNumber}
//           onChange={(e) => setRollNumber(e.target.value)}
//           style={{ width: "100%", padding: "8px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
//         />

//         <select
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           style={{ width: "100%", padding: "8px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
//         >
//           <option value="mentee">Mentee</option>
//           <option value="mentor">Mentor</option>
//         </select>

//         <button
//           onClick={handleLogin}
//           style={{ width: "100%", background: "#3b82f6", color: "#fff", padding: "10px", border: "none", borderRadius: "6px", cursor: "pointer" }}
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Login() {
//   const [rollNumber, setRollNumber] = useState("");
//   const [role, setRole] = useState("mentee");
//   const navigate = useNavigate();

// const handleLogin = async () => {
//   try {
//     const res = await axios.post("http://localhost:5000/api/login", {
//       rollNumber: rollNumber.trim().toUpperCase(),
//       password,
//       role,
//     });

//     if (role === "mentor") {
//       localStorage.setItem("mentorId", res.data.mentor._id);
//       navigate("/mentor");
//     } else {
//       localStorage.setItem("studentId", res.data.student._id);
//       navigate("/mentee");
//     }
//   } catch (err) {
//     console.error("Login error:", err.response?.data || err.message);
//     alert(err.response?.data?.message || "❌ Login failed.");
//   }
// };


//   return (
//     <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8fafc" }}>
//       <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", width: "300px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
//         <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>

//         <input
//           type="text"
//           placeholder="Roll Number"
//           value={rollNumber}
//           onChange={(e) => setRollNumber(e.target.value)}
//           style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />

//         <select value={role} onChange={(e) => setRole(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px" }}>
//           <option value="mentee">Mentee</option>
//           <option value="mentor">Mentor</option>
//         </select>

//         <button
//           onClick={handleLogin}
//           style={{ width: "100%", padding: "10px", border: "none", borderRadius: "6px", background: "#3b82f6", color: "#fff", cursor: "pointer" }}
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// // }


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Login() {
//   const [rollNumber, setRollNumber] = useState("");
//   const [role, setRole] = useState("mentee");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/login", {
//         rollNumber: rollNumber.trim().toUpperCase(),
//         role,
//       });

//       if (role === "mentor") {
//         localStorage.setItem("mentorId", res.data.mentor._id);
//         localStorage.setItem("role", "mentor");
//         navigate("/mentor");
//       } else {
//         localStorage.setItem("studentId", res.data.student._id);
//         localStorage.setItem("role", "mentee");
//         navigate("/mentee");
//       }
//     } catch (err) {
//       console.error("Login error:", err.response?.data || err.message);
//       alert(err.response?.data?.message || "❌ Login failed.");
//     }
//   };

//   return (
//     <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8fafc" }}>
//       <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", width: "300px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
//         <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>

//         <input
//           type="text"
//           placeholder="Roll Number"
//           value={rollNumber}
//           onChange={(e) => setRollNumber(e.target.value)}
//           style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />

//         <select value={role} onChange={(e) => setRole(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px" }}>
//           <option value="mentee">Mentee</option>
//           <option value="mentor">Mentor</option>
//         </select>

//         <button
//           onClick={handleLogin}
//           style={{ width: "100%", padding: "10px", border: "none", borderRadius: "6px", background: "#3b82f6", color: "#fff", cursor: "pointer" }}
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [rollNumber, setRollNumber] = useState("");
  const [role, setRole] = useState("mentee");
  const navigate = useNavigate();




const handleLogin = async () => {
  try {
    const res = await axios.post("http://localhost:5000/api/login", {
      rollNumber: rollNumber.trim().toUpperCase(),
      role,
    });

    if (res.data.role === "mentor") {
      localStorage.setItem("mentorId", res.data.mentor._id);
      localStorage.setItem("role", "mentor");
      localStorage.setItem("rollNumber", res.data.mentor.rollNumber);
      navigate("/mentor"); // Redirect to mentor dashboard
    }else if (res.data.role === "mentee") {
  localStorage.setItem("student", JSON.stringify(res.data.student)); // store full object
  localStorage.setItem("studentId", res.data.student._id);
  localStorage.setItem("role", "mentee");
  localStorage.setItem("rollNumber", res.data.student.rollNumber);
  navigate("/mentee");
}

  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);
    alert(err.response?.data?.message || "❌ Login failed.");
  }
};










  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "300px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>

        <input
          type="text"
          placeholder="Roll Number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <option value="mentee">Mentee</option>
          <option value="mentor">Mentor</option>
        </select>

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            border: "none",
            borderRadius: "6px",
            background: "#3b82f6",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}



