import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // API call logic here
    console.log("Logging in with", email, password);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <Link to="/report">Report a Disaster</Link>
    </div>
  );
};

const ReportDisaster = () => {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    // API call logic here
    console.log("Disaster Reported:", location, description);
  };

  return (
    <div className="container">
      <h2>Report a Disaster</h2>
      <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
      <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
      <button onClick={handleSubmit}>Submit Report</button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report" element={<ReportDisaster />} />
      </Routes>
    </Router>
  );
};

export default App;
