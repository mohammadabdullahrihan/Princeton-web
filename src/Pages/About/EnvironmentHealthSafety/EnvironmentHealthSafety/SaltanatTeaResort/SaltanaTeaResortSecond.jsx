import { useContext } from "react";
import healthyPhoto from "../../../../../assets/images/About/EHS/4/full-view-6.jpg";
import { DarkModeContext } from "../../../../../Contexts/NightLightContext";


const SaltanaTeaResortSecond = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      className={`${
        darkMode ? "text-white" : "text-black"
      } grid grid-cols-2   p-24`}
    >
      <div>
        <h1 className="text-5xl uppercase mb-10">Capacity</h1>
        <p>A new branch of Chuti Resort Limited named The Saltanat Tea Resort is being launched in Srimangal, Sylhet Division, one of Bangladesh's major tourist zones. Nearly 27 acres of land in the tea capital of Srimangal, The Saltanat Inn project will feature villas, cottages, and all the modern amenities of a luxury resort.
        </p>
      </div>
      <div>
        <img  loading="lazy" className="h-96" src={healthyPhoto} alt="" />
      </div>
    </section>
  );
};

export default SaltanaTeaResortSecond;
