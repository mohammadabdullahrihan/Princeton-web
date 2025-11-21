import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import YouTube from "react-youtube";
import { DarkModeContext } from "../../../../Contexts/NightLightContext";
import toast from "react-hot-toast";
import axios from "axios";
import { GoMute, GoUnmute } from "react-icons/go";

const ExploreVideos = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMute, setIsMute] = useState(true);
  const { darkMode } = useContext(DarkModeContext);

  const fetchVideos = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://chuti-harmony-server.vercel.app/api/v1/explore-project/explore-project"
      );
      console.log(response.data);
      setVideos(response.data.data || []); // Ensure videos is an array
    } catch (error) {
      console.error("Error fetching videos:", error);
      toast.error("Failed to fetch videos");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const extractYouTubeID = (url) => {
    const match = url?.match(
      /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/\?v=))([^&?\/\s]{11})/
    );
    return match ? match[1] : null;
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true,
    arrows: false,
  };

  const videoOptions = (videoId) => ({
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: isMute ? 1 : 0,
      controls: 0,
      loop: 1,
      playlist: videoId,
      modestbranding: 1,
      rel: 0,
      disablekb: 1,
    },
  });

  const toggleMute = () => setIsMute((prev) => !prev);

  // Handle video end
  const handleVideoEnd = (event) => {
    const player = event.target;
    player.seekTo(0); // Restart the video from the beginning
    player.playVideo(); // Play the video again
  };

  return (
    <div
      className="scrollable-element mx-auto font-familyPortfolio mb-10"
      style={{
        width: "100%",
        height: "90vh", // Increased height for larger videos
      }}
    >
      {isLoading ? (
        <p>Loading videos...</p>
      ) : (
        <Slider {...sliderSettings}>
          {videos.map((video) => {
            const videoId = extractYouTubeID(video.url);
            return (
              <div
                key={video._id}
                className="relative w-full h-full overflow-hidden"
                style={{ height: "100%" }}
              >
                {/* Wrapper div for YouTube player */}
                <div
                  style={{
                    position: "relative",
                    paddingTop: "56.25%", // 16:9 aspect ratio (9 / 16 * 100)
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <YouTube
                    videoId={videoId}
                    opts={videoOptions(videoId)}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // Ensure the video fills the container
                    }}
                    containerClassName="youtube-container"
                    onEnd={handleVideoEnd}
                  />
                </div>
                <h1
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center absolute bottom-8 left-1/2 transform -translate-x-1/2  ${
                    darkMode ? "exploreWordDesign" : "exploreWordDesignForLight"
                  }`}
                >
                  {/* {video.name} */}
                </h1>
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4  text-white px-4 py-2 rounded"
                >
                  {isMute ? (
                    <GoMute className="border rounded-full w-16 h-16 p-2" />
                  ) : (
                    <GoUnmute className="border rounded-full w-16 h-16 p-2 " />
                  )}
                </button>
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
};

export default ExploreVideos;