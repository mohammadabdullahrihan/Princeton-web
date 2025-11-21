// import missionImage from "../../../assets/images/About/Our-story/mission2.jpg";
// import visionImage from "../../../assets/images/About/Our-story/vision-image.png";
import { useEffect } from "react";
import useOurStoryData from "../../../Hooks/useOurStoryData";
import Loading from "../../../Shared/Loading/Loading";
import AOS from "aos";
import "aos/dist/aos.css";

const VissionAndMission = () => {
  const [ourStory] = useOurStoryData();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  if (!ourStory) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  return (
    <section className=" bg-[#5C5151] text-white">
      <div className="lg:grid grid-cols-2 lg:mx-20 mx-5 lg:p-20 p-5">
        <div className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300">
          <h1 className="lg:text-6xl text-3xl">
            <span className="mr-10">V</span>
            <span className="mr-10">I</span>
            <span className="mr-10">S</span>
            <span className="mr-10">I</span>
            <span className="mr-10">O</span>
            <span>N</span>
          </h1>
          <p className="lg:text-xl lg:mr-10 my-10">{ourStory.visionTitle}</p>
          <img
            loading="lazy"
            className=" lg:h-[450px]"
            src={ourStory.visionImage}
            alt="Vision Image"
          />
        </div>
        <div
          className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300 lg:mt-0 mt-40 lg:ml-10 ml-2"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <h1 className="lg:text-6xl text-2xl">
            <span className="mr-10">M</span>
            <span className="mr-10">I</span>
            <span className="mr-10">S</span>
            <span className="mr-10">S</span>
            <span className="mr-10">I</span>
            <span className="mr-10">O</span>
            <span>N</span>
          </h1>
          <p className="lg:text-xl lg:mr-10 mr-2 my-10">
            {ourStory.missionTitle}
          </p>
          <img
            loading="lazy"
            className="w-full lg:h-[450px] "
            src={ourStory.misssionImage}
            alt="Mission Image"
          />
        </div>
      </div>
    </section>
  );
};

export default VissionAndMission;
