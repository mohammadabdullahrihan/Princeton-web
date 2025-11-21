import { DarkModeContext } from "../../../../../Contexts/NightLightContext";
import safetyImage1 from "../../../../../assets/images/About/EHS/3/WhatsApp-Image-2024-04-02-at-12.29.03-AM-1.jpeg";
import { useContext } from "react";

const ChutiPurbacalThird = () => {
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
          <li className="mb-1">
            Resort Location: Galan, Rathura, Purbachal New Town, Gazipur 1720,
            Gazipur, Dhaka Division, Bangladesh
          </li>
          <li className="mb-1">
            <a
              href="instagram.com/chutiresortpurbachal"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram.com/chutiresortpurbachal
            </a>
          </li>
          <li className="mb-1">
            <a
              href="www.youtube.com/@ChutiResortPurbachal"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube: www.youtube.com/@ChutiResortPurbachal
            </a>
          </li>
          <li className="mb-1">
            <a
              href="www.chutiresortpurbachal.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website: www.chutiresortpurbachal.com
            </a>
          </li>
        </div>
      </div>
    </section>
  );
};

export default ChutiPurbacalThird;
