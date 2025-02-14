import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/loginpage.css"; 
import "../components/userdashboard.css";
import "boxicons/css/boxicons.min.css"; 
const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleLogin = () => {
    navigate("/userdashboard");
  };

  const handleHotelLogin = () => {
    navigate("/userdashboardhotel");
  };

  return (
    <div className="loginpage">
      <div className="wrapper">
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Log In</h1>
        <div className="input-box">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <i className="bx bx-user"></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <i className="bx bx-lock"></i>
        </div>
        <div className="remember-forgot">
          <label>
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            Remember Me
          </label>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
        <button type="button" className="logbutton" onClick={handleLogin}>
          Login
        </button>
        <button type="button" className="logwithhotelbutton" onClick={handleHotelLogin}>
          Login For Hotels
        </button>
        <div className="register-link">
          <p>
            Don't have an account? <Link to="/registerpage">Register</Link>
          </p>
        </div>
      </form>
      <footer>
        <h3>&copy; All Rights Reserved</h3>
      </footer>
    </div>
    </div>
  );
};

export default LoginPage;
