import { useContext } from "react";
import HeaderCarousel from "./HeaderCarousel";
import { DarkModeContext } from "../../../Contexts/NightLightContext";
import { MotionAnimate } from "react-motion-animate";

const HeaderAndPhotos = () => {
  const darkModeContext = useContext(DarkModeContext);
  const { darkMode } = darkModeContext;

  return (
    <MotionAnimate
      animation="fadeInUp"
      reset={true}
      distance={200}
      delay={1}
      speed={1}
    >
      <div
        style={{
          backgroundColor: darkMode ? "#212121" : "white",
          color: darkMode ? "white" : "#212121",
        }}
        className="px-3 sm:px-8 lg:px-16 py-6"
      >
        {/* Header Section */}
        <div className="text-center">
          <div className="lg:flex gap-20">
            <h1
              className={`text-5xl lg:text-7xl font-thin letter-spacing-6 mb-6 sm:mb-10 transition delay-150 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {/* Animated Letters */}
              {"settings".split("").map((char, idx) => (
                <span
                  key={idx}
                  className={`inline-block m-1 sm:m-2 p-1 sm:p-2 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {char.trim() ? char : "\u00A0"}
                </span>
              ))}
            </h1>
            <h1
              className={`text-5xl lg:text-7xl font-thin letter-spacing-6 mb-6 sm:mb-10 transition delay-150 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {/* Animated Letters */}
              {"standards".split("").map((char, idx) => (
                <span
                  key={idx}
                  className={`inline-block m-1 sm:m-2 p-1 sm:p-2 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {char.trim() ? char : "\u00A0"}
                </span>
              ))}
            </h1>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="mb-6 sm:mb-10">
          <HeaderCarousel />
        </div>
      </div>
    </MotionAnimate>
  );
};

export default HeaderAndPhotos;
