import axios from "axios";
import { useEffect, useState } from "react";
import InvestmentCategory from "../InvestmentCategory/InvestmentCategory";

const InvestmentCategories = () => {
  const [investmentCategories, setInvestmentCategories] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      const responseData = await axios.get("investmentCategories.json");
      if (responseData.data) {
        setInvestmentCategories(responseData.data);
      }
    };
    fetchedData();
  }, []);
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-5 lg:p-10 p-5 ">
        {investmentCategories.map((investmentCategory) => (
          <InvestmentCategory
            key={investmentCategory._id}
            investmentCategory={investmentCategory}
          ></InvestmentCategory>
        ))}
      </div>
    </div>
  );
};

export default InvestmentCategories;
