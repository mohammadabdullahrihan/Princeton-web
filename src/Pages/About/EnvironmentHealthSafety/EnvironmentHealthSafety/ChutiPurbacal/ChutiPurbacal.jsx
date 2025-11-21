import environmentalProtectionImage1 from "../../../../../assets/images/About/EHS/3/petrol-pump.jpg";
import environmentalProtectionImage2 from "../../../../../assets/images/About/EHS/3/WhatsApp-Image-2024-04-01-at-11.59.38-PM.jpeg";
import environmentalProtectionImage3 from "../../../../../assets/images/About/EHS/3/WhatsApp-Image-2024-04-01-at-11.59.39-PM-1.jpeg";
import environmentalProtectionImage4 from "../../../../../assets/images/About/EHS/3/WhatsApp-Image-2024-04-01-at-11.59.39-PM.jpeg";
import { useContext } from "react";
import { DarkModeContext } from "../../../../../Contexts/NightLightContext";

const ChutiPurbacal = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      className={`${darkMode ? "text-white" : "text-black"} lg:flex  px-20 font-sans`}
    >
      <div className="lg:grid grid-cols-2 gap-4 lg:mr-40 ">
        <img  loading="lazy" className="w-96 lg:mt-0 mt-5" src={environmentalProtectionImage1} alt="" />
        <img  loading="lazy" className="w-96 lg:mt-0 mt-5" src={environmentalProtectionImage2} alt="" />
        <img  loading="lazy" className="w-96 lg:mt-0 mt-5" src={environmentalProtectionImage3} alt="" />
        <img  loading="lazy" className="w-96 lg:mt-0 mt-5" src={environmentalProtectionImage4} alt="" />
      </div>
      <div className={`${darkMode ? "text-white" : "text-black"}`}>
        <h1 className="lg:text-4xl text-2xl mb-5">
          Available Facilities in Chuti Resort Purbachal
        </h1>
        <li className="mt-1">Night Stay</li>
        <li className="mt-1">Corporate Dayout</li>
        <li className="mt-1">Family Dayout</li>
        <li className="mt-1">Corporate Workshop</li>
        <li className="mt-1">Student Dayout</li>
        <li className="mt-1">Couple Night stay</li>
        <li className="mt-1">Candlelight Dinner</li>
        <li className="mt-1">Tent Living</li>
        <li className="mt-1">Walking Track</li>
        <li className="mt-1">Destination Wedding and many more</li>
      </div>
    </section>
  );
};

export default ChutiPurbacal;
