import { useContext } from "react";
import ourClicentsCoverPhoto from "../../../../assets/images/About/Our-Clients/banner-1.jpg";
import { DarkModeContext } from "../../../../Contexts/NightLightContext";

const OurClientsTitleAndPhoto = () => {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div>
      <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 px-20">
        <h1 className={`${darkMode ? "text-white" : "text-black"} lg:text-8xl text-3xl text-center`}>OUR CLIENTS</h1>
      </div>
      <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 px-20">
        <img  loading="lazy" src={ourClicentsCoverPhoto} alt="" />
      </div>
    </div>
  );
};

export default OurClientsTitleAndPhoto;
