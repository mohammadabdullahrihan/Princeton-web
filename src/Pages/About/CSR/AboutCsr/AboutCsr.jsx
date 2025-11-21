import { Link } from "react-router-dom";
import doctorImg from "../../../../assets/images/About/CSR/CSR.original.png";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../../../Contexts/NightLightContext";

const AboutCsr = () => {
  const {darkMode} = useContext(DarkModeContext);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const detailsAboutCsr = `As part of its Corporate Social Responsibility (CSR), Chuti Harmony
        Ltd. is the main founder and primary financier of Ashulia Women and
        Children Hospital (AWCH). It is a fully philanthropic non-profit
        hospital located in Beron, Ashulia right on the Tongi -Ashulia-EPZ
        bypass road. This hospital’s mission is to support the overall
        development of women and children and the medical needs of the
        underprivileged segment of society. The Hospital runs and operates under
        a trust chaired by renowned national pediatrician Prof. Dr. M Q-K
        Talukder. Mr. Khondoker Monir Uddin, the Managing Director of Chuti harmony, is
        a member of the Board of Trustees who acts as the chief advisor and
        counselor to the trust. This hospital has been in operation since 2004,
        occupying a land area of 3.76 acres with a current built-up area of
        approximately 250,000 sft. in an 8 storied building. It caters mainly to
        outpatient services 24 hours x 7 days a week. This 250-bed hospital is
        equipped with 12 ICUs, 08 HDUs, 12 NICUs, 12 Neonatology and over 100
        doctors and physicians of various specialties including a number of
        senior consultants. The hospital is also equipped Dialysis center,
        Diagnostic lab, Emergency wing and more, ensuring comprehensive care for
        our patients. AWCH research programs were initiated to address MDG goals
        by assisting the government in reducing child mortality and making other
        improvements. A couple of research findings were submitted to the
        government of Bangladesh and also published in different international
        medical journals with appreciation. AWCH has adopted a master plan to
        construct a Medical College in the near future.`;

  const sliceDetails = detailsAboutCsr.slice(0, 900);

  return (
    <section className={`grid grid-cols-2 gap-6 mx-20 ${darkMode ? "text-white" : "text-black"}`}>
      <div className="p-10">
        <img loading="lazy" src={doctorImg} alt="" />
      </div>
      <div className="p-10">
        <h3 className="text-3xl font-bold uppercase mb-10">
          Ashulia women and children's Hospital
        </h3>
        <p className="text-xl">{showMore ? detailsAboutCsr : sliceDetails}</p>
        <button className="underline uppercase mt-10" onClick={handleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default AboutCsr;
