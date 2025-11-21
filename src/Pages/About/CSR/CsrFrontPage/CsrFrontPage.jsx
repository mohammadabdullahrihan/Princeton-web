import { useContext } from "react";
import hospitalPhoto from "../../../../assets/images/About/CSR/Rectangle_5803_2.original.png"
import { DarkModeContext } from "../../../../Contexts/NightLightContext";
const CsrFrontPage = () => {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={`${darkMode ? "text-white" : "text-black"}`}>
      <div>
        <h1 className="text-8xl font-bold text-center">CSR</h1>
      </div>
      <div className="mx-20">
        <img loading="lazy" src={hospitalPhoto} alt="" />
      </div>
      <div>
        <h1 className="text-7xl text-center uppercase m-20 opacity-95">Your Trusted <br /><span className="font-bold">Healthcare </span> provider<br />for<span className="font-bold"> women and children</span></h1>
      </div>
    </div>
  );
};

export default CsrFrontPage;
