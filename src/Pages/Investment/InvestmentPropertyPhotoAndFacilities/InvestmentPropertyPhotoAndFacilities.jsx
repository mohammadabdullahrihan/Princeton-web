import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import InvestmentPropertySlider from "./InvestmentPropertySlider";

const InvestmentPropertyPhotoAndFacilities = () => {
  const [investmentBenefits, setInvestmentBenefits] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      const response = await axios.get(
        `https://chuti-harmony-server.vercel.app/api/v1/investment/investment`
      );
      if (response.data && response.data.data) {
        setInvestmentBenefits(response.data.data);
      }
    };
    fetchedData();
  }, [investmentBenefits]);
  return (
    <section>
      <div className="lg:grid grid-cols-2 gap-4 p-12 my-10">
        <div>
          <InvestmentPropertySlider></InvestmentPropertySlider>
        </div>
        <div className="bg-[#8F8933] border-2 rounded px-5 py-4">
          <div className="text-white">
            <h1 className="text-4xl font-bold text-white text-center border-b-2">
              Ownership / Investment Benefits
            </h1>
            <div className="mt-5 grid grid-cols-2 gap-4 ">
              {investmentBenefits.map((investmentBenefit) => {
                return (
                  <li key={investmentBenefit._id}>
                    {investmentBenefit.benefits}
                  </li>
                );
              })}
            </div>
            <div className="text-center">
              <Link
                to={"/contact-for-investment"}
                className="btn btn-wide bg-white hover:bg-white border-none hover:text-black text-[#8F8933] text-xl h-16 mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Apply now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPropertyPhotoAndFacilities;
