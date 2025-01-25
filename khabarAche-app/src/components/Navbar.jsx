import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-30 h-35 backdrop-blur-lg border-b border-neutral-600/60">
      <div className="container px-10 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-50 w-40 mr-1" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              KHABAR_ACHE?
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-orange-500 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 item-center">
            <a
              href="src\components\loginpage.html"
              className="py-2 px-3 border rounded-md hover:text-orange-500 transition"
            >
              Log In
            </a>
            <a
              href="src\components\registerpage.html"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:text-black transition"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a
                    href={item.href}
                    className="hover:text-orange-500 transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="src\components\loginpage.html"
                className="py-2 px-3 border rounded-md hover:text-orange-500 transition"
              >
                log In
              </a>
              <a
                href="src\components\registerpage.html"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:text-black transition"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
