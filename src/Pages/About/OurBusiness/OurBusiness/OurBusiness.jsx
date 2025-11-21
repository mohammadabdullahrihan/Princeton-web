import OurBusinessTitleAndPhoto from "../OurBusinessTitleAndPhoto/OurBusinessTitleAndPhoto";
import { BentoGridSection } from "./BentoGridSection";

const OurBusiness = () => {
    return (
        <div>
            <OurBusinessTitleAndPhoto />
            {/* <OurBusinessDetails /> */}
            <BentoGridSection />
        </div>
    );
};

export default OurBusiness;