import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // ✅ Ensure this file exists
import App from "./App.jsx"; // ✅ Correct import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
