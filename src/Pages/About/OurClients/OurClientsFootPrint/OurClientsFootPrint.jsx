import { useContext } from "react";
import { DarkModeContext } from "../../../../Contexts/NightLightContext";

const OurClientsFootPrint = () => {

  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={`${darkMode ? "text-white" : "text-black"} my-20  text-center opacity-75 bg-[#FFFAF4]`}>
      <h3 className="uppercase text-3xl">A footprint of renowned names</h3>
      <p className="text-xl lg:mx-40 mt-5 lg:px-20 px-5">
        We pride ourselves in creating spaces where leading corporates choose to
        establish their place of business. At Shanta, you become part of an
        elite community of renowned local and global names.
      </p>
    </div>
  );
};

export default OurClientsFootPrint;
