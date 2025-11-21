import { useContext } from "react";
import healthyPhoto from "../../../../assets/images/About/EHS/1/Couple-5.jpeg";
import { DarkModeContext } from "../../../../Contexts/NightLightContext";

const HealthHygiene = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      className={`${
        darkMode ? "text-white" : "text-black"
      } lg:grid grid-cols-2 p-5 lg:p-24`}
    >
      <div>
        <h1 className="text-5xl uppercase mb-5 font-sans">Capacity</h1>
        <li className="mb-1 font-sans">53 Rooms</li>
        <li className="mb-1 font-sans"> 3 Workshop Venue</li>
        <li className="mb-1 font-sans"> Fine Dining</li>
        <li className="mb-1 font-sans"> Dayout capacity 2500 person per day</li>
        <li className="mb-1 font-sans">300 Car parking facility</li>
      </div>
      <div>
        <img  loading="lazy" className="h-96" src={healthyPhoto} alt="" />
      </div>
    </section>
  );
};

export default HealthHygiene;
