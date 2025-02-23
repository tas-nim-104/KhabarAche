import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../components/loginpage.css";
import "boxicons/css/boxicons.min.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [isHotelLogin, setIsHotelLogin] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:4002/api/auth", {
        email,
        password,
       // remember,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data);
        navigate(isHotelLogin ? "/userdashboardhotel" : "/userdashboard");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="loginpage">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Log In</h1>
          {error && <p className="error-message">{error}</p>}
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i className="bx bx-lock"></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                name="rememberMe"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember Me
            </label>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
          <button type="submit" className="logbutton">Login</button>
          <button type="submit" className="logwithhotelbutton" onClick={() => setIsHotelLogin(true)}>
            Login For Hotels
          </button>
        </form>
        <div className="register-link">
          <p>
            Don't have an account? <Link to="/registerpage">Register</Link>
          </p>
        </div>
        <footer>
          <h3>&copy; All Rights Reserved</h3>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
