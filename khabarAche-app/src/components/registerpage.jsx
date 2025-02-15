import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/loginpage.css";
import "boxicons/css/boxicons.min.css"; 

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="loginpage">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          
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
              type="tel"
              name="phone"
              placeholder="Phone (11 digits)"
              pattern="[0-9]{11}"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <i className="bx bx-phone"></i>
          </div>

          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <i className="bx bx-envelope"></i>
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
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              Remember Me
            </label>
          </div>

          <button type="submit" className="logbutton">
            Create Account
          </button>

          <div className="register-link">
            <p>
              Already have an account? <Link to="/loginpage">Login</Link>
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

export default RegisterPage;
