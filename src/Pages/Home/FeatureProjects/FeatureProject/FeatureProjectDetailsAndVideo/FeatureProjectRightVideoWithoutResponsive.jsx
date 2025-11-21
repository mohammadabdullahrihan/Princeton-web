import Slider from "react-slick/lib/slider";
import useProjectData from "../../../../../Hooks/useProjectData";
import { useEffect, useRef } from "react";

const FeatureProjectRightVideoWithoutResponsive = () => {
  const [featureProjects] = useProjectData([]);
  const videoRef = useRef(null);
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
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
    <div>
      <Slider {...settings2}>
        {featureProjects.map((featureProject) => (
          <div key={featureProject.id}>
            <video ref={videoRef} src={featureProject.projectVideo}></video>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureProjectRightVideoWithoutResponsive;