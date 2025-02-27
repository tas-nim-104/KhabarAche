import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Landingpage from "./Pages/Landingpage";
import Homepage from "./Pages/Homepage";
import Loginpage from "../src/components/loginpage";
import Registerpage from "../src/components/registerpage";
import Userdashboard from "../src/components/userdashboard";
import Userdashboardhotel from "../src/components/userdashboardhotel";
import "../src/components/loginpage.css";
import "../src/components/userdashboard.css";
const App = () => {
  //const user = localStorage.getItem("token");
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landingpage />} /> 
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/registerpage" element={<Registerpage />} />
          <Route path="/userdashboard" element={<Userdashboard />} />
          <Route path="/userdashboardhotel" element={<Userdashboardhotel />} />
          <Route path="/Homepage" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
