import Explore from "./Explore/Explore";
import "./Explores.css";
const ExploresWithoutResponsive = () => {
  return (
    <section className="font-familyProjects">
      <div>
        <h1 className=" mb-10 text-center uppercase">
          Explore
        </h1>
      </div>
      <div className="">
        <Explore></Explore>
      </div>
    </section>
  );
};

export default ExploresWithoutResponsive;
