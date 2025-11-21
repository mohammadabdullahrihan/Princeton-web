import { useContext } from "react";
import healthyPhoto from "../../../../../assets/images/About/EHS/2/imageye___-_298504835_3933067333585923_5451053921575645786_n.png";
import { DarkModeContext } from "../../../../../Contexts/NightLightContext";

const ChutiAronnobashSecond = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      className={`${
        darkMode ? "text-white" : "text-black"
      } lg:grid grid-cols-2  lg:px-24 px-5 font-sans`}
    >
      <div className="font-sans">
        <h1 className="lg:text-5xl text-3xl uppercase mb-5">Capacity</h1>
        <li className="mb-1">09 Rooms</li>
        <li className="mb-1"> 2 Workshop Venue</li>
        <li className="mb-1">
          {" "}
          Fine Dining and Dayout capacity 1500 person per day
        </li>
        <li className="mb-1"> Dayout capacity 2500 person per day</li>
        <li className="mb-1"> 45 car parking facility</li>
      </div>
      <div>
        <img  loading="lazy" className="h-96" src={healthyPhoto} alt="" />
      </div>
    </section>
  );
};

export default ChutiAronnobashSecond;
