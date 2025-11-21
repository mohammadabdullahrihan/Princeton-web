import environmentalProtectionImage1 from "../../../../../assets/images/About/EHS/2/banne5r-1.jpg";
import environmentalProtectionImage2 from "../../../../../assets/images/About/EHS/2/banner-102.jpg";
import environmentalProtectionImage3 from "../../../../../assets/images/About/EHS/2/bhawal-cottage-thumb.jpg";
import environmentalProtectionImage4 from "../../../../../assets/images/About/EHS/2/imageye___-_298504835_3933067333585923_5451053921575645786_n.png";
import { useContext } from "react";
import { DarkModeContext } from "../../../../../Contexts/NightLightContext";

const ChutiAronnobash = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      className={`${darkMode ? "text-white" : "text-black"} lg:flex  lg:px-20 lg:py-10 `}
    >
      <div className="lg:grid grid-cols-2 gap-4 lg:mr-40">
        <img  loading="lazy" className="lg:mt-0 mt-5 w-96" src={environmentalProtectionImage1} alt="" />
        <img  loading="lazy" className="lg:mt-0 mt-5 w-96" src={environmentalProtectionImage2} alt="" />
        <img  loading="lazy" className="lg:mt-0 mt-5 w-96" src={environmentalProtectionImage3} alt="" />
        <img  loading="lazy" className="lg:mt-0 mt-5 w-96" src={environmentalProtectionImage4} alt="" />
      </div>
      <div className={`${darkMode ? "text-white" : "text-black"} lg:ml-0 ml-5`}>
        <h1 className="text-4xl mb-5 font-sans">
          Available Facilities in Chuti Aronnobash
        </h1>
        <li className="mt-1 font-sans">Night Stay</li>
        <li className="mt-1 font-sans">Corporate Dayout</li>
        <li className="mt-1 font-sans">Family Dayout</li>
        <li className="mt-1 font-sans">Corporate Workshop</li>
        <li className="mt-1 font-sans">Student Dayout</li>
        <li className="mt-1 font-sans">Couple Night stay</li>
        <li className="mt-1 font-sans">Candlelight Dinner</li>
        <li className="mt-1 font-sans">Swimming Pool</li>
        <li className="mt-1 font-sans">Kids’ Zone</li>
        <li className="mt-1 font-sans">Destination Wedding and many more.</li>
      </div>
    </section>
  );
};

export default ChutiAronnobash;
