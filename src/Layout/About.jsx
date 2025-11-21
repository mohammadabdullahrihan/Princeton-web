import { Outlet } from "react-router-dom";
// import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Navbar2 from "../Shared/Navbar/Navbar2";
import { useContext } from "react";
import { DarkModeContext } from "../Contexts/NightLightContext";

const About = () => {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
            <Navbar2></Navbar2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default About;