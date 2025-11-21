import HomePopUp from "../../../Shared/HomePopUp/HomePopUp";
import LetConnect from "../Connect/LetConnect";
import Explores from "../Explores/Explores";
import FeatureProject from "../FeatureProjects/FeatureProject/FeatureProject";
import HeaderAndPhotos from "../HeaderAndPhotos/HeaderAndPhotos";
import LandMarks from "../LandMarks/LandMarks";
import LandMarksDetailsAndPhotos from "../LandMarksDetailsAndPhotos/LandMarksDetailsAndPhotos";
import OurClients from "../OurClients/OurClients/OurClients";
import Portfolio from "../Portfolio/Portfolio";
import ProfessionalManagement from "../ProfessionalManagement/ProfessionalManagement";
import Projects from "../Projects/Projects";
// import ProjectsImageSlider from "../Projects/ProjectsImageSlider/ProjectsImageSlider";
import "./Home.css";

const Home = () => {
  return (
    <div className="main-home">
      <div>
        <HeaderAndPhotos></HeaderAndPhotos>
      </div>
      <div className="">
        <Portfolio></Portfolio>
      </div>
      <div className="">
        <ProfessionalManagement></ProfessionalManagement>
      </div>
      <div className="">
        <Projects></Projects>
      </div>
      <div className="">
        <FeatureProject></FeatureProject>
      </div>
      <div className="lg:mb-20">
        <LandMarks></LandMarks>
      </div>
      <div>
        <LandMarksDetailsAndPhotos></LandMarksDetailsAndPhotos>
      </div>

      <div className="">
        <Explores></Explores>
      </div>
      <div className="lg:mb-0 mb-40">
        <OurClients></OurClients>
      </div>
      <div className="-mt-[45rem]">
        <LetConnect></LetConnect>
      </div>
    </div>
  );
};

export default Home;
