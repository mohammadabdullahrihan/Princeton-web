import safetyImage1 from "../../../../assets/images/About/EHS/1/imageye___-_about-ccollage-1.jpeg";
import { useContext } from "react";
import { DarkModeContext } from "../../../../Contexts/NightLightContext";

const Safety = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section>
      <div
        className={`lg:grid grid-cols-2 lg:mx-20 mx-5 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        <div>
          <img  loading="lazy" className="w-[28rem]" src={safetyImage1} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-5 font-sans">Resort Details</h1>
          <li className="mb-1 font-sans">
            Resort Location: Sukundi, Amtoli, Joydebpur, Gazipur, Bangladesh,
            Post code: 1700
          </li>
          <li className="mb-1 font-sans">
            <a
              href="https://www.facebook.com/chutiresort"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.facebook.com/chutiresort
            </a>
          </li>
          <li className="mb-1 font-sans">
            <a
              href="https://www.instagram.com/chutiresortgazipur"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.instagram.com/chutiresortgazipur
            </a>
          </li>
          <li className="mb-1 font-sans">
            <a
              href="https://www.chutiresort.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.chutiresort.com
            </a>
          </li>
        </div>
      </div>
    </section>
  );
};

export default Safety;