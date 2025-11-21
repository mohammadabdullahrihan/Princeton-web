import safetyImage1 from "../../../../../assets/images/About/EHS/4/WhatsApp-Image-2024-01-02-at-2.09.41-PM.jpeg";
import { useContext } from "react";
import { DarkModeContext } from "../../../../../Contexts/NightLightContext";

const SaltanatTeaResortThird = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section>
      <div
        className={`lg:grid grid-cols-2 lg:mx-20 m-5 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        <div>
          <img  loading="lazy" className="w-[28rem]" src={safetyImage1} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-5">Resort Details</h1>
          <li className="mb-1
          ">
            Project Location: Kamalaganj, Sreemangal, Moulvibazar Sylhet, Sylhet
            Division, Bangladesh,
          </li>
          <li className="mb-1">
            <a
              href="www.facebook.com/SaltanatTeaResortBD"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.facebook.com/SaltanatTeaResortBD
            </a>
          </li>
          <li className="mb-1">
            <a href="thesaltanat.com" target="_blank" rel="noopener noreferrer">
              Website: thesaltanat.com
            </a>
          </li>
        </div>
      </div>
    </section>
  );
};

export default SaltanatTeaResortThird;
