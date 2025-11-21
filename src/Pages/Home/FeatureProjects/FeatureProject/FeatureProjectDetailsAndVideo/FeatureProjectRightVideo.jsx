

import Slider from "react-slick/lib/slider";
import useProjectData from "../../../../../Hooks/useProjectData";
import { useEffect, useRef } from "react";

const FeatureProjectSlide = () => {
  const [featureProjects] = useProjectData([]);
  const videoRef = useRef(null);
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 600,
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
  
  return (
    <div className="w-full px-4 py-8 lg:px-16">
      <Slider {...settings2}>
        {featureProjects.map((featureProject) => (
          <div key={featureProject._id} className="relative">
            <video
              ref={videoRef}
              src={featureProject.projectVideo}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureProjectSlide;
