import { useContext } from "react";
import "./Portfolio.css";
import { DarkModeContext } from "../../../Contexts/NightLightContext";

const PortfolioWithoutResponsive = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="ml-96 px-36 mt-20">
      <p className={`${darkMode ? "text-white" : "text-black"} font-familyPortfolio `}>
        Our real estate portfolio is a mark of distinction. Featuring the
        country's most selective developments, we promise investors and buyers
        an unmatched level of service. Our success is built on strong standards
        and a keen eye for detail, embodying luxury and excellence.
      </p>
      
    </div>
  );
};

export default PortfolioWithoutResponsive;
