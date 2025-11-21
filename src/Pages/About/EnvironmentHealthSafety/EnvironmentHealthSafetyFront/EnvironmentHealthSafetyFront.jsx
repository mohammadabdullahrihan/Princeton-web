import { useContext } from "react";
import ehsFrontImage from "../../../../assets/images/About/EHS/2.jpg";
import { DarkModeContext } from "../../../../Contexts/NightLightContext";

const EnvironmentHealthSafetyFront = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`${darkMode ? "text-white" : "text-black"}`}>
      <div>
        <h1
          className={`${
            darkMode ? "text-white" : "text-black"
          } lg:text-8xl text-3xl text-center  uppercase font-sans`}
        >
          Chuti Harmony <br /> Facilities
        </h1>
      </div>
      <div className="mx-20">
        <img  loading="lazy" src={ehsFrontImage} alt="" />
      </div>
      <div>
        <h3
          className={`${
            darkMode ? "text-white" : "text-black"
          } text-2xl text-center  lg:mx-20 my-5 m-3 font-sans`}
        >
          Chuti is a well-known name in the development and expansion of the
          tourism industry in Bangladesh, providing high-quality hospitality
          services for domestic and international tourists.A trusted
          destination. Since 2012, Chuti Resort has been playing a significant
          role in offering exceptional guest services.
        </h3>
      </div>
      
    </div>
  );
};

export default EnvironmentHealthSafetyFront;
