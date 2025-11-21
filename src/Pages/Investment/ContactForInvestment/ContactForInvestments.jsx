import { useContext } from "react";
import "./ContactForInvestment.css";
import ContactForInvestmentForm from "./ContactForInvestmentForm";
import { DarkModeContext } from "../../../Contexts/NightLightContext";

const ContactForInvestments = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div>
      <div
        className={`${darkMode ? "bg-white" : "bg-[#8F8933]"}  wave-box mb-60`}
      >
        <h1 className="text-5xl font-sans uppercase text-center text-black p-32 tracking-wide">
          COntact us for investment
        </h1>
      </div>
      <div className="">
        <ContactForInvestmentForm></ContactForInvestmentForm>
      </div>
    </div>
  );
};

export default ContactForInvestments;
