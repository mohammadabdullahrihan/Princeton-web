import { Outlet } from "react-router-dom";
import Navbar2 from "../Shared/Navbar/Navbar2";
import { useContext } from "react";
import { DarkModeContext } from "../Contexts/NightLightContext";

const Login = () => {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <div className={`${darkMode ? "bg-[#212121]" : "bg-white"} ${darkMode ? "text-white" : "text-black"}`}>
            <Navbar2></Navbar2>
            <Outlet></Outlet>
        </div>
    );
};

export default Login;