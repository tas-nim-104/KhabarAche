import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isHotelLogin, setIsHotelLogin] = useState();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setIsLoggedIn(!!storedUser); 
  }, []);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const navItems = [
    { label: "Home", href: "/Homepage" },
    { label: "Hotels", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "Account", href: !isLoggedIn ? "/" :isHotelLogin ?"/userdashboardhotel":"/userdashboard" },
  ];

  return (
    <nav className="sticky z-30 h-25 backdrop-blur-lg border-b border-neutral-600/60">
      <div className="container px-10 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-35 w-30 mr-1" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              KHABAR_ACHE?
            </span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href} className="hover:text-orange-500 transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {!isLoggedIn && (
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <Link
                to="/loginpage"
                className="py-2 px-3 border rounded-md hover:text-orange-500 transition"
              >
                Log In
              </Link>
              <Link
                to="/registerpage"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:text-black transition"
              >
                Create an account
              </Link>
            </div>
          )}

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} aria-label="Toggle navigation">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link
                    to={item.href}
                    className="hover:text-orange-500 transition"
                    onClick={toggleNavbar}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {!isLoggedIn && (
              <div className="flex space-x-6">
                <Link
                  to="/loginpage"
                  className="py-2 px-3 border rounded-md hover:text-orange-500 transition"
                >
                  Log In
                </Link>
                <Link
                  to="/registerpage"
                  className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:text-black transition"
                >
                  Create an account
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
