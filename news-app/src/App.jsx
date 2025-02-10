import React, { useState } from "react"; // Import useState
import Navbar from "./Components/Navbar";
import { NewsBoard } from "./Components/NewsBoard"; // ✅ Import NewsBoard

export const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
};

export default App;
