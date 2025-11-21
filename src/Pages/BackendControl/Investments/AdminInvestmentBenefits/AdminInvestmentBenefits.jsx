import axios from "axios";
import { useEffect, useState } from "react";
import AdminInvestmentBenefit from "./AdminInvestmentBenefit";
import Loading from "../../../../Shared/Loading/Loading";
import AdminAddInvestmentBenefit from "./AdminAddInvestmentBenefit";

const AdminInvestmentBenefits = () => {
  const [investmentBenefits, setInvestmentBenefits] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  if (isLoading) {
    <Loading></Loading>;
  }

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get(
          "https://chuti-harmony-server.vercel.app/api/v1/investment/investment"
        );
        if (response.data && response.data.data) {
          setInvestmentBenefits(response.data.data);
          setIsloading(false);
          console.log(response.data.data);
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchedData();
  }, [investmentBenefits]);

  return (
    <section>
      <div className="border  border-gray-400 p-5 rounded">
        <div className="mb-5">
          <AdminAddInvestmentBenefit></AdminAddInvestmentBenefit>
        </div>
        <div>
          {investmentBenefits.map((investmentBenefit) => {
            return (
              <AdminInvestmentBenefit
                key={investmentBenefit._id}
                investmentBenefit={investmentBenefit}
              ></AdminInvestmentBenefit>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdminInvestmentBenefits;
