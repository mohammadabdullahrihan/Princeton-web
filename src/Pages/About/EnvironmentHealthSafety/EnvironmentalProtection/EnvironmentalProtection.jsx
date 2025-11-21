import environmentalProtectionImage1 from "../../../../assets/images/About/EHS/1/banne5r-1.jpg";
import environmentalProtectionImage2 from "../../../../assets/images/About/EHS/1/banner-102.jpg";
import environmentalProtectionImage3 from "../../../../assets/images/About/EHS/1/banner-2.jpg";
import environmentalProtectionImage4 from "../../../../assets/images/About/EHS/1/bhawal-cottage-thumb.jpg";
import { useContext } from "react";
import { DarkModeContext } from "../../../../Contexts/NightLightContext";

const EnvironmentalProtection = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      className={`${darkMode ? "text-white" : "text-black"} lg:flex  lg:px-20 p-5`}
    >
      <div className="lg:grid grid-cols-2 gap-4 lg:mr-40 mr-5">
        <img  loading="lazy" className="lg:w-96 lg:mt-0 mt-2" src={environmentalProtectionImage1} alt="" />
        <img  loading="lazy" className="lg:w-96 lg:mt-0 mt-2" src={environmentalProtectionImage2} alt="" />
        <img  loading="lazy" className="lg:w-96 lg:mt-0 mt-2" src={environmentalProtectionImage3} alt="" />
        <img  loading="lazy" className="lg:w-96 lg:mt-0 mt-2" src={environmentalProtectionImage4} alt="" />
      </div>
      <div className={`${darkMode ? "text-white" : "text-black"}`}>
        <h1 className="lg:text-4xl mb-10 font-sans">
          Available Facilities in Chuti Resort Gazipur
        </h1>
        <li className="mt-2 font-sans">
          Night Stay, Swimming, Corporate Dayout, Corporate Dinner, Corporate
          Workshop,{" "}
        </li>
        <li className="mt-2 font-sans">
          Family Dayout, Student Dayout, Couple Night Stay, Candlelight Dinner,
          Destination Wedding,{" "}
        </li>
        <li className="mt-2 font-sans">
          Horse Riding, Boating, Kayaking, Birthday Celebration, Walking track,
          Tent Living, DJ Party,31st Night celebration
        </li>
        <li className="mt-2 font-sans">
          Pohela Boishakh Celebration, Fishing, and many more.
        </li>
      </div>
    </section>
  );
};

export default EnvironmentalProtection;
