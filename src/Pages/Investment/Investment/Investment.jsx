import ContactForInvestmentForm from "../ContactForInvestment/ContactForInvestmentForm";
import InvestmentBanner from "../InvestmentBanner/InvestmentBanner";
import InvestmentCategories from "../InvestmentCategories/InvestmentCategories/InvestmentCategories";
import InvestmentPropertyPhotoAndFacilities from "../InvestmentPropertyPhotoAndFacilities/InvestmentPropertyPhotoAndFacilities";

const Investment = () => {
  return (
    <div className="font-sans">
      <InvestmentBanner></InvestmentBanner>
      <InvestmentPropertyPhotoAndFacilities></InvestmentPropertyPhotoAndFacilities>
      <ContactForInvestmentForm></ContactForInvestmentForm>
      <InvestmentCategories></InvestmentCategories>
    </div>
  );
};

export default Investment;
