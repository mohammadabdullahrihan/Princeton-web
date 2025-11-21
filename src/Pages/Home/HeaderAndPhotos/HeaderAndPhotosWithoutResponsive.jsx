import { useContext } from "react";
import HeaderCarousel from "./HeaderCarousel";
import { DarkModeContext } from "../../../Contexts/NightLightContext";

const HeaderAndPhotosWithoutResponsive = () => {
  const darkModeContext = useContext(DarkModeContext);
  const {darkMode} = darkModeContext;
  
  return (
    <div style={{"backgroundColor": darkMode ? "#212121" : "white", "color": darkMode ?  "#212121" : "white" }}>
      <div>
        <h1 className="text-8xl font-thin text-black letter-spacing-6 mb-10 text-center transition delay-150" >
          <span></span>
          <span className={`m-2 p-2 ${darkMode ?  "text-white" : "text-black"}`}>s</span>
          <span className={`m-2 p-2 ${darkMode ?  "text-white" : "text-black"}`}>e</span>
          <span className={`m-2 p-2 ${darkMode ?  "text-white" : "text-black"}`}>t</span>
          <span className={`m-2 p-2 ${darkMode ?  "text-white" : "text-black"}`}>t</span>
          <span className={`m-2 p-2 ${darkMode ?  "text-white" : "text-black"}`}>i</span>
          <span className={`m-2 p-2 ${darkMode ?  "text-white" : "text-black"}`}>n</span>
          <span className={`m-2 p-2 ${darkMode ?  "text-white" : "text-black"}`}>g</span>
          <span className={`m-2 p-2 ${darkMode ?  "text-white" : "text-black"}`}></span>
          <span className={`m-2 p-2 ${darkMode ?  "text-white" : "text-black"}`}>s</span>
          <span className={`m-2 p-2 ${darkMode ?  "text-white" : "text-black"}`}>t</span>
          <span className={`m-2 p-2 ${darkMode ?  "text-white" : "text-black"}`}>a</span>
          <span className={`m-2 p-2 ${darkMode ?  "text-white" : "text-black"}`}>n</span>
          <span className={`m-2 p-2 ${darkMode ?  "text-white" : "text-black"}`}>d</span>
          <span className={`m-2 p-2 ${darkMode ?  "text-white" : "text-black"}`}>a</span>
          <span className={`m-2 p-2 ${darkMode ?  "text-white" : "text-black"}`}>r</span>
          <span className={`m-2 p-2 ${darkMode ?  "text-white" : "text-black"}`}>d</span>
          <span className={`m-2 p-2 ${darkMode ?  "text-white" : "text-black"}`}>s</span>
        </h1>
      </div>
      <div className="mb-10 animi-photo">
        <HeaderCarousel></HeaderCarousel>
      </div>
    </div>
  );
};

export default HeaderAndPhotosWithoutResponsive;
