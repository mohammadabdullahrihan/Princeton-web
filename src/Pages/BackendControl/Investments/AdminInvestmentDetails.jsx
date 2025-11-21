import { useState } from "react";
import AdminInvestmentBenefits from "./AdminInvestmentBenefits/AdminInvestmentBenefits";
import AdminInvestmentPhoto from "./AdminInvestmentPhoto";
import Loading from "../../../Shared/Loading/Loading";

const AdminInvestmentDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-4xl uppercase text-center font-sans text-[#8E8A20] mb-10">
        Ownership/investment benefits
      </h1>
      <AdminInvestmentPhoto></AdminInvestmentPhoto>
      <AdminInvestmentBenefits></AdminInvestmentBenefits>
    </div>
  );
};

export default AdminInvestmentDetails;
