import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/loginpage.css"; 
import "boxicons/css/boxicons.min.css"; 
import axios from "axios"; 

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setName] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [remember, setRemember] = useState(false); 
  const [isHotelLogin, setIsHotelLogin] = useState(false); 

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    axios.post("http://localhost:4002/loginpage", { username, password, remember })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          if (isHotelLogin) {
            navigate("/userdashboardhotel");
          } else {
            navigate("/userdashboard");
          }
        } else {
          alert("Invalid login credentials");
        }
      })
      .catch((err) => console.log(err));
  }, [username, password, remember, isHotelLogin, navigate]);

  return (
    <div className="loginpage">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setName(e.target.value)}
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
          <button 
            type="submit" 
            className="logbutton"
            onClick={() => setIsHotelLogin(false)} 
          >
            Login
          </button>
          <button 
            type="submit" 
            className="logwithhotelbutton"
            onClick={() => setIsHotelLogin(true)} 
          >
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
