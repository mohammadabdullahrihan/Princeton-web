import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../Contexts/NightLightContext";
import navbarLogoForDark from "../../assets/images/chuti-harmony/chuti-harmony-logo-black.png";
import navbarLogoForLight from "../../assets/images/chuti-harmony/chuti-harmony-logo.png";

import { FaToggleOn, FaToggleOff } from "react-icons/fa";

import "./Navbar2.css";

const AdminNav = () => {
  const darkModeContext = useContext(DarkModeContext);
  const { darkMode, setDarkMode } = darkModeContext;

  return (
    <div className="navbar-container">
      <div className="navbar px-5 md:px-20 py-3 md:py-5 flex items-center">
        {/* Logo */}
        <div className="flex-1">
          <Link to={"/"} className="text-start block">
            {darkMode ? (
              <img
               loading="lazy"
                src={navbarLogoForLight}
                alt="Logo"
                className="h-14 md:h-20"
              />
            ) : (
              <img
               loading="lazy"
                src={navbarLogoForDark}
                alt="Logo"
                className="h-14 md:h-20"
              />
            )}
          </Link>
        </div>

        {/* Light/Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <p
            onClick={() => setDarkMode(!darkMode)}
            className={`cursor-pointer text-lg md:text-2xl ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {darkMode ? "Dark" : "Light"}
          </p>
          <div
            className="cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <FaToggleOff className="h-6 w-6 md:h-7 md:w-7 text-[#8F8933]" />
            ) : (
              <FaToggleOn className="h-6 w-6 md:h-7 md:w-7 text-[#8F8933]" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
