import { useEffect, useState } from "react";
import WhyShantaCard from "./WhyShantaCard";

const WhyShantaCards = () => {
  const [cardDetails, setCardDetails] = useState([]);

  useEffect(() => {
    fetch("whyChuti.json")
      .then((res) => res.json())
      .then((data) => setCardDetails(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 gap-4 lg:mt-20 ">
      {cardDetails.map((cardDetail) => (
        <WhyShantaCard
          key={cardDetail.id}
          cardDetail={cardDetail}
        ></WhyShantaCard>
      ))}
    </div>
  );
};

export default WhyShantaCards;
