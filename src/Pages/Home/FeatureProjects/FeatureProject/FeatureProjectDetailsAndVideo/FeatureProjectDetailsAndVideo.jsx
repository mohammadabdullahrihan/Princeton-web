import Slider from "react-slick/lib/slider";
import useProjectData from "../../../../../Hooks/useProjectData";
import { useContext, useEffect, useRef } from "react";
import FeatureProjectSlide from "./FeatureProjectRightVideo";
import { DarkModeContext } from "../../../../../Contexts/NightLightContext";
import { FiArrowRightCircle } from "react-icons/fi";
import "./FeatureProjectDetailsAndVideos.css";
import { useNavigate } from "react-router-dom";

const FeatureProjectDetailsAndVideo = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [featureProjects] = useProjectData([]);
  const videoRef = useRef(null);

  // slider2 and slider3 setting
  const settings2 = {
    dots: false,
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
  };

  const handleVideoPlayer = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.muted = true;
    }
  };

  //   useEffect for calling the video play function
  useEffect(() => {
    handleVideoPlayer();
  }, []);

  // navigate
  const navigate = useNavigate();

  // handle view project button
  const handleViewProject = (_id) => {
    navigate(`/project/${_id}`);
  };

  return (
    <section className="px-4 sm:px-8 lg:px-16 lg:-mt-0 -mt-96">
      <div
        className={`ml-8 lg:ml-36 mt-8 sm:mt-12 lg:-mt-[480px] uppercase ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        <h1
          className={`text-lg sm:text-xl mb-2 ${
            darkMode ? "text-white" : "text-white"
          }`}
        >
          Feature Projects
        </h1>
        <Slider {...settings2}>
          {featureProjects.map((featureProject) => (
            <div key={featureProject._id} className={`${darkMode ? "" : ""}`}>
              <h1
                className={`text-base sm:text-lg lg:text-2xl text-white brightness-125`}
              >
                {featureProject.projectType}
              </h1>
              <h1
                className={`text-2xl sm:text-3xl lg:text-4xl mt-4 text-white brightness-125`}
              >
                {featureProject.projectName}
              </h1>
              <p
                className={`text-base sm:text-lg lg:text-xl mt-6 text-white brightness-125`}
              >
                {featureProject.address}
              </p>
              <div>
                <button
                  onClick={() => handleViewProject(featureProject._id)}
                  className={`${
                    darkMode ? "text-white" : "text-white "
                  } btn btn-outline hover:bg-[#8F8933] mt-8 sm:mt-12 lg:mt-16 featureProject-font text-sm sm:text-lg lg:text-xl border-none bg-none`}
                >
                  <FiArrowRightCircle className="inline-block mr-2" />
                  View Project
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full sm:w-[450px] lg:w-[550px] mx-auto lg:mr-20 mt-12 lg:-mt-60 float-none lg:float-end">
        <FeatureProjectSlide></FeatureProjectSlide>
      </div>
    </section>
  );
};

export default FeatureProjectDetailsAndVideo;
