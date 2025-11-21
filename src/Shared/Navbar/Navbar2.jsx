import { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../Contexts/NightLightContext";
import navbarLogoForDark from "../../assets/images/chuti-harmony/chuti-harmony-logo-black.png";
import navbarLogoForLight from "../../assets/images/chuti-harmony/chuti-harmony-logo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import "./Navbar2.css";

const Navbar2 = () => {
  const darkModeContext = useContext(DarkModeContext);
  const { darkMode, setDarkMode } = darkModeContext;

  const [currentMenu, setCurrentMenu] = useState("main");
  const [showMenu, setShowMenu] = useState(false);
  
  const menuRef = useRef(null);

  const handleMenuToggle = () => setShowMenu(!showMenu);
  const showMainMenu = () => setCurrentMenu("main");
  const showSubMenu = (menu) => setCurrentMenu(menu);

  const handleCloseMenu = () => setShowMenu(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`navbar-container ${darkMode ?   "bg-black" : "bg-[#FFFAF4]"} `}>
      <div className="navbar px-4 md:px-20 py-3 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1">
          <Link to={"/"} className="text-start block" onClick={handleCloseMenu}>
            {darkMode ? (
              <img
               loading="lazy"
                src={navbarLogoForLight}
                alt="Logo"
                className="h-20 md:h-32"
              />
            ) : (
              <img
               loading="lazy"
                src={navbarLogoForDark}
                alt="Logo"
                className="h-20 md:h-32"
              />
            )}
          </Link>
        </div>

        {/* Light/Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <p
            onClick={() => setDarkMode(!darkMode)}
            className={`cursor-pointer text-base md:text-2xl ${
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
              <FaToggleOff className="h-5 w-5 md:h-7 md:w-7 text-[#8F8933]" />
            ) : (
              <FaToggleOn className="h-5 w-5 md:h-7 md:w-7 text-[#8F8933]" />
            )}
          </div>
        </div>

        {/* Menu Button */}
        {!showMenu && (
          <div
            className="menu-icon ml-4 md:ml-10 text-base md:text-2xl cursor-pointer flex items-center"
            onClick={handleMenuToggle}
          >
            <p className="hidden md:block">Menu</p>
            <CiMenuBurger className="cursor-pointer text-2xl md:text-4xl ml-2 md:ml-4" />
          </div>
        )}
      </div>

      {/* Backdrop with fade animation */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-500 ${
          showMenu ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowMenu(false)}
      ></div>

      {/* Sliding Menu */}
      <div
        ref={menuRef}
        className={`menu-container fixed top-0 right-0 h-full w-[300px] md:w-[400px] bg-black text-white z-50 transform ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 ease-in-out`}
        style={{
          backgroundColor: "black",
          boxShadow: showMenu ? "-5px 0 15px rgba(0, 0, 0, 0.2)" : "none"
        }}
      >
        <div className={`menu-content`}>
          {/* Main Menu */}
          {currentMenu === "main" && (
            <ul className="menu-list space-y-6 md:space-y-8 p-4 md:p-6 ml-6 md:ml-10 navbar-menuItemsDesign">
              <li className="relative">
                <input
                  type="text"
                  placeholder="Search Projects"
                  className="search-input w-full p-2 mt-10 md:mt-16 bg-transparent border-b-2 border-gray-400 focus:border-[#8F8933] focus:outline-none text-white placeholder-gray-400 text-2xl"
                />
              </li>
              <li className="hover:text-[#8F8933] pt-4 pl-8 text-2xl">
                <Link to="/">Home</Link>
              </li>

              <li className="pl-8 py-2">
                <button
                  onClick={() => showSubMenu("about")}
                  className="flex items-center w-full hover:text-[#8F8933] text-2xl"
                  style={{ marginTop: "0px", padding: '0.5rem 0' }}
                >
                  About Chuti{" "}
                  <MdOutlineKeyboardArrowRight className="ml-3 md:ml-5 text-3xl" />
                </button>
              </li>
              <li className="pl-8 py-2">
                <button
                  onClick={() => showSubMenu("projects")}
                  className="flex items-center w-full hover:text-[#8F8933] text-2xl"
                  style={{ marginTop: "0px" }}
                >
                  Projects{" "}
                  <MdOutlineKeyboardArrowRight className="ml-3 md:ml-5 text-3xl" />
                </button>
              </li>
              <li className="mt-6 pl-8 md:mt-12 hover:text-[#8F8933] text-2xl py-2">
                <Link to="/gallery" onClick={handleCloseMenu}>
                  Gallery
                </Link>
              </li>
              <li className="mt-6 pl-8 md:mt-12 hover:text-[#8F8933] text-2xl py-2">
                <Link to="/career" onClick={handleCloseMenu}>
                  Careers
                </Link>
              </li>
              <li className="mt-6 pl-8 hover:text-[#8F8933] text-2xl py-2">
                <Link to="/news-events" onClick={handleCloseMenu}>
                  News & Events
                </Link>
              </li>

              <li className="mt-6 pl-8 hover:text-[#8F8933] text-2xl py-2">
                <Link to="/invest" onClick={handleCloseMenu}>
                  Investment
                </Link>
              </li>

              <li className="mt-6 pl-8 hover:text-[#8F8933] text-2xl py-2">
                <Link to="/contact" onClick={handleCloseMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          )}

          {/* Submenus */}
          {currentMenu === "about" && (
            <ul className="menu-list space-y-3 md:space-y-4 p-4 md:p-6 ml-3 md:ml-5">
              <li className="px-7">
                <button
                  onClick={showMainMenu}
                  className="flex items-center space-x-2 hover:text-[#8F8933] mt-5"
                >
                  <MdOutlineArrowBackIosNew className="mr-2" /> Back
                </button>
              </li>
              <h2 className="text-2xl md:text-3xl font-bold px-8 text-[#8F8933]">
                About Chuti
              </h2>
              <li className="hover:text-[#8F8933] px-7 text-3xl">
                <Link to="/our-story" onClick={handleCloseMenu}>
                  Our Story
                </Link>
              </li>
              {/* <li className="hover:text-[#8F8933] px-7">
                <Link to={"/our-team"} onClick={handleCloseMenu}>
                  Our Team
                </Link>
              </li> */}
              <li className="hover:text-[#8F8933] px-7 text-3xl">
                <Link to={"/why-chuti"} onClick={handleCloseMenu}>
                  Why Chuti ?
                </Link>
              </li>
              <li className="hover:text-[#8F8933] px-7 text-3xl">
                <Link to={"/our-business"} onClick={handleCloseMenu}>
                  Our Business
                </Link>
              </li>
              <li className="hover:text-[#8F8933] px-7 text-3xl">
                <Link to={"/our-clients"} onClick={handleCloseMenu}>
                  Our Clients
                </Link>
              </li>
              <li className="hover:text-[#8F8933] px-7 text-3xl">
                <Link to={"/facilities"} onClick={handleCloseMenu}>
                  Facilities
                </Link>
              </li>
              <li className="hover:text-[#8F8933] px-7">
                <Link to={"/csr"} onClick={handleCloseMenu}>
                  CSR
                </Link>
              </li>
            </ul>
          )}

          {currentMenu === "projects" && (
            <ul className="menu-list space-y-3 md:space-y-4 p-4 md:p-6 ml-3 md:ml-5 mt-5 md:mt-10">
              <li className="px-7">
                <button
                  onClick={showMainMenu}
                  className="flex items-center space-x-2 hover:text-[#8F8933] mt-5"
                >
                  <MdOutlineArrowBackIosNew className="mr-2" /> Back
                </button>
              </li>
              <h2 className="text-2xl md:text-3xl font-bold px-8 text-[#8F8933]">
                Projects
              </h2>
              <li className="hover:text-[#8F8933] px-7 text-3xl">
                <Link to={"/all-projects"} onClick={handleCloseMenu}>
                  All Projects
                </Link>
              </li>
              <li className="hover:text-[#8F8933] px-7 text-3xl">
                <Link
                  to={"/projects/ongoing-projects"}
                  onClick={handleCloseMenu}
                >
                  Ongoing Projects{" "}
                </Link>
              </li>
              <li className="hover:text-[#8F8933] px-7 text-3xl">
                <Link
                  to={"/projects/upcoming-projects"}
                  onClick={handleCloseMenu}
                >
                  Upcoming Projects{" "}
                </Link>
              </li>
              <li className="hover:text-[#8F8933] px-7 text-3xl">
                <Link to={"/completed-projects"} onClick={handleCloseMenu}>
                  Completed Projects{" "}
                </Link>
              </li>
            </ul>
          )}

          {/* Social Icons */}
          <div className="flex gap-5 md:gap-8 ml-3 md:ml-5 mt-5 md:mt-10 justify-center text-2xl md:text-4xl ">
            <Link to="https://www.facebook.com/chutiharmony">
              <CiFacebook className="border-[#978c21] text-white  rounded-full p-[3px] w-10 h-8 hover:text-[#8F8933] hover:cursor-pointer" />
            </Link>
            <Link to="https://www.instagram.com/chutiharmony">
              <FaInstagram className="border-[#978c21] text-white  rounded-full p-[3px] w-10 h-8 hover:text-[#8F8933] hover:cursor-pointer" />
            </Link>
            <Link to="https://www.youtube.com/channel/UC6R5RKFnO8xbaM_aJp3jmJA">
              <RiYoutubeLine className="border-[#978c21] text-white  rounded-full p-[3px] w-10 h-8 hover:text-[#8F8933] hover:cursor-pointer" />
            </Link>
            {/* <PiLinkedinLogo className="border-[#978c21] text-white  rounded-full p-[3px] w-10 h-8 hover:text-[#8F8933] hover:cursor-pointer" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
