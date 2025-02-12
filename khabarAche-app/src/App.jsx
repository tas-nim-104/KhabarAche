import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Landingpage from "./Pages/Landingpage";
import Homepage from "./Pages/Homepage";
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landingpage />} />  
          <Route path="/Homepage" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
