import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/loginpage.css";
import "boxicons/css/boxicons.min.css"; 
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const registerpage = () => {
  const [username, setName] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [remember, setRemembar] = useState()
  const Navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4002/registerpage',{username, phone,email, password,remember})
    .then(result=> {console.log(result)
    Navigate('/loginpage')
    })
    .catch(err=>console.log(err))
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
              onChange={(e) => setName(e.target.value)}
            />
            <i className="bx bx-user"></i>
          </div>

          <div className="input-box">
            <input
              type="tel"
              name="phone"
              placeholder="Phone (11 digits)"
              pattern="[0-9]{11}"
              onChange={(e) => setPhone(e.target.value)}
            />
            <i className="bx bx-phone"></i>
          </div>

          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="bx bx-envelope"></i>
          </div>

          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="bx bx-lock"></i>
          </div>

          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                name="remember"
                onChange={(e) => setRemembar(e.target.value)}
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

export default registerpage;
