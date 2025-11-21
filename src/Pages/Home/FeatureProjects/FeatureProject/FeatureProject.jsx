import Slider from "react-slick/lib/slider";
import FeatureProjectDetailsAndVideo from "./FeatureProjectDetailsAndVideo/FeatureProjectDetailsAndVideo";
import useProjectData from "../../../../Hooks/useProjectData";
import { useContext } from "react";
import { DarkModeContext } from "../../../../Contexts/NightLightContext";


const FeatureProject = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [featureProjects, error] = useProjectData();

  // this setting is for slider1
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: false,
    fade: false,
    button: false,
    cssEase: "linear",
    arrows: false,
    vertical: true,
  };

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }
  if (!featureProjects.length) {
    return <p>Loading feature projects....</p>;
  }



  return (
    <section className="mb-[420px] featureProject-font">
      <div
        className={`${darkMode ? "opacity-50" : ""} scrollable-element px-5 `}
      >
        <Slider {...settings1}>
          {featureProjects.map((featureProject) => (
            <div key={featureProject._id} className="">
              <img
               loading="lazy"
                src={featureProject.projectCoverPhoto}
                alt={`Slide ${featureProject.id}`}
                style={{
                   height: "600px", 
                   width: "1400px" ,
                   filter: "brightness(0.5)"
                  }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div>
        <FeatureProjectDetailsAndVideo></FeatureProjectDetailsAndVideo>
      </div>
    </section>
  );
  // <section className="mb-20">
  //   <div className="slider-container">
  //     {" "}
  //     {/* Container for all sliders */}
  //     <div className="background-slider">
  //       {" "}
  //       {/* First slider as background */}
  //       <Slider {...settings1}>
  //         {featureProjects.map((featureProject) => (
  //           <div key={featureProject.id}>
  //             <img
  //               src={featureProject.projectImg}
  //               alt={`Slide ${featureProject.id}`}
  //               style={{ height: "600px", width: "1400px" }}
  //             />
  //           </div>
  //         ))}
  //       </Slider>
  //     </div>
  //     <div className="slider-wrapper">
  //       {" "}
  //       {/* Wrapper for remaining sliders */}
  //       <div className="slider slider-left">
  //         {" "}
  //         {/* Second slider (center left) */}
  //         <Slider {...settings2}>
  //           {featureProjects.map((featureProject) => (
  //             <div key={featureProject.id}>
  //               <h1>{featureProject.projectType}</h1>
  //               <p>{featureProject.projectName}</p>
  //             </div>
  //           ))}
  //         </Slider>
  //       </div>
  //       <div className="slider slider-right">
  //         {/* Third slider (center right) */}
  //         <Slider {...settings2}>
  //           {featureProjects.map((featureProject) => (
  //             <div key={featureProject.id}>
  //               <video src={featureProject.projectVideo}></video>
  //             </div>
  //           ))}
  //         </Slider>
  //       </div>
  //     </div>
  //   </div>
  // </section>;
};

export default FeatureProject;
