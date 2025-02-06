import { useState } from "react";
import axios from "axios";

const ReportDisaster = () => {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8080/api/disasters", { location, description });
      alert("Disaster reported successfully!");
    } catch (error) {
      console.error("Error reporting disaster", error);
    }
  };

  return (
    <div>
      <h2>Report a Disaster</h2>
      <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
      <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
      <button onClick={handleSubmit}>Submit Report</button>
    </div>
  );
};

export default ReportDisaster;
