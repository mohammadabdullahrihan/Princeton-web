import { useEffect } from "react";
import OurClientsDetails from "../OurClientsDetails/OurClientsDetails";
import OurClientsFootPrint from "../OurClientsFootPrint/OurClientsFootPrint";
import OurClientsTitleAndPhoto from "../OurClientsTitleAndPhoto/OurClientsTitleAndPhoto";

const OurClients = () => {
  useEffect(() => {
    const section = document.getElementById("mySection");
    section.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <section id="mySection">
      <div>
        <OurClientsTitleAndPhoto></OurClientsTitleAndPhoto>
        <OurClientsFootPrint></OurClientsFootPrint>
        <OurClientsDetails></OurClientsDetails>
      </div>
    </section>
  );
};

export default OurClients;
