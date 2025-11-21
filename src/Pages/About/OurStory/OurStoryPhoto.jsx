// import frontImage from '../../../assets/images/About/Our-story/Front-imageUntitled_design.2e16d0ba.fill-2560x1440-c0.png'
import useOurStoryData from "../../../Hooks/useOurStoryData";
import Loading from "../../../Shared/Loading/Loading";
const OurStoryPhoto = () => {
  const [ourStory] = useOurStoryData();

  if (!ourStory) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div>
      <img
       loading="lazy"
        className="opacity-75 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300"
        src={ourStory.storyBannerImage}
        alt=""
      />
    </div>
  );
};

export default OurStoryPhoto;
