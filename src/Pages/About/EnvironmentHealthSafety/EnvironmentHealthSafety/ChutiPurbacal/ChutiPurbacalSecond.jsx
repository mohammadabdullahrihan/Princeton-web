import { useContext } from "react";
import healthyPhoto from "../../../../../assets/images/About/EHS/3/WhatsApp-Image-2024-04-01-at-9.52.03-PM-scaled.jpeg";
import { DarkModeContext } from "../../../../../Contexts/NightLightContext";

const ChutiPurbacalSecond = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      className={`${
        darkMode ? "text-white" : "text-black"
      } lg:grid grid-cols-2 lg:px-24 p-5 font-sans`}
    >
      <div>
        <h1 className="text-5xl uppercase mb-5">Capacity</h1>
        <li className="mb-1">23 Rooms</li>
        <li className="mb-1"> 2 Workshop Venue</li>
        <li className="mb-1"> Kids’ Zone</li>
        <li className="mb-1">
          {" "}
          Fine Dining and Dayout capacity 500 person per day
        </li>
        <li className="mb-1"> 45 car parking facility</li>
      </div>
      <div>
        <img  loading="lazy" className="h-96" src={healthyPhoto} alt="" />
      </div>
    </section>
  );
};

export default ChutiPurbacalSecond;
