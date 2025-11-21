import clients1 from "../../../../assets/images/chuti-harmony/clients/1.jpg";
import clients2 from "../../../../assets/images/chuti-harmony/clients/2.jpg";
import clients3 from "../../../../assets/images/chuti-harmony/clients/3.jpg";
import clients4 from "../../../../assets/images/chuti-harmony/clients/4.jpg";
import clients5 from "../../../../assets/images/chuti-harmony/clients/5.jpg";
import clients6 from "../../../../assets/images/chuti-harmony/clients/6.jpg";

const OurClientsDetails = () => {
  return (
    <div className="">
      <img  loading="lazy" className="lg:px-40" src={clients1} alt="" />
      <img  loading="lazy" className="lg:px-40" src={clients2} alt="" />
      <img  loading="lazy" className="lg:px-40" src={clients3} alt="" />
      <img  loading="lazy" className="lg:px-40" src={clients4} alt="" />
      <img  loading="lazy" className="lg:px-40" src={clients5} alt="" />
      <img  loading="lazy" className="lg:px-40" src={clients6} alt="" />
    </div>
  );
};

export default OurClientsDetails;
