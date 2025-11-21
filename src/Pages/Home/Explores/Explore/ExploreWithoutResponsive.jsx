import { useContext, useEffect, useRef, useState } from "react";
import Slider from "react-slick/lib/slider";
import { DarkModeContext } from "../../../../Contexts/NightLightContext";

const ExploreWithoutResponsive = () => {
  const videoRef = useRef(null);
  const [isMute, setIsMute] = useState(true);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const video = videoRef.current;
    video.muted = isMute;
    video.play();
  }, [isMute]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    fade: true,
    button: false,
    cssEase: "linear",
    arrows: false,
  };

  const toggleHandleMute = () => {
    const video = videoRef.current;
    video.muted = !isMute;
    setIsMute(!isMute);
  };

  const photos = [
    {
      id: 1,
      name: "Dhaka Tower",
      url: "https://cms.shantaholdings.com/media/media/DT_Preview.mp4",
    },
    {
      id: 2,
      name: "Pinnacle",
      url: "https://cms.shantaholdings.com/images/86--5tKulkR3GneUgPDfXkZ7ncA=/161/fill-1120x628-c0/16092648450piti.jpg?t=1728708306801",
    },
    {
      id: 3,
      name: "Evermore",
      url: "https://cms.shantaholdings.com/images/RobOfTCN-P9uZZNnb3qv45vk_XA=/163/fill-1120x628-c0/1694347488kUw3f.jpg?t=1728708306802",
    },
    {
      id: 4,
      name: "Utopia",
      url: "https://cms.shantaholdings.com/images/fKMEub0_ovUbsZHrGmxSlSsPbR4=/164/fill-1120x628-c0/1596038525qby3y.jpg?t=1728708306805",
    },
    {
      id: 5,
      name: "This is Shanta",
      url: "https://cms.shantaholdings.com/media/media/This_is_Shanta_Preview.mp4",
    },
    {
      id: 6,
      name: "Forum",
      url: "https://cms.shantaholdings.com/media/media/Forum_Preview.mp4",
    },
    {
      id: 7,
      name: "Transforming Land into Landmarks",
      url: "https://cms.shantaholdings.com/media/media/Untitled_design.mp4",
    },
  ];
  return (
    <div
      className="scrollable-element mx-auto font-familyPortfolio"
      style={{ width: "950px", height: "90vh" }}
    >
      <Slider {...sliderSettings}>
        {photos.map((photo) => {
          const isVideo = photo.url.endsWith(".mp4");
          // console.log(photo.url);
          return (
            <div key={photo.id}>
              {isVideo ? (
                <video
                  controls={false}
                  ref={videoRef}
                  src={photo.url}
                  onClick={toggleHandleMute}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img  loading="lazy" src={photo.url} alt={`Slide ${photo.id}`} />
              )}
              <h1
                className={`text-6xl text-center -mt-6 opacity-50 ${
                  darkMode ? "exploreWordDesign" : "exploreWordDesignForLight"
                }`}
              >
                {photo.name}
              </h1>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ExploreWithoutResponsive;