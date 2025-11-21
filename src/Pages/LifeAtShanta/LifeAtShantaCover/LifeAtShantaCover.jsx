import { useContext } from "react";
import { DarkModeContext } from "../../../Contexts/NightLightContext";
import useLifeAtChutiData from "../../../Hooks/useLifeAtChutiData";
import Loading from "../../../Shared/Loading/Loading";
import AnimatedTextUptoDown from "../../../Shared/AnimatedText/AnimatedTextUptoDown";
import LifeAtShantaCoverPhoto from "./LifeAtShantaCoverPhoto";

const LifeAtShantaCover = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [whyChutiDatas, error, loading] = useLifeAtChutiData();
  return (
    <section
      className={`${
        darkMode ? "bg-black text-white" : "bg-[#FFFAF4] text-black"
      }`}
    >
      <div>
        <h1 className="cssanimation leHangAndDropLeft lg:text-8xl md:text:6xl sm:text-4xl text-center relative lg:-mb-10 uppercase text-stroke-white">
          <AnimatedTextUptoDown text="Gallery" animationType="sequence" />
          <br />
          {/* <AnimatedTextUptoDown text="Chuti Harmony" animationType="random" /> */}
        </h1>
      </div>
      <div>
        {loading ? (
          <Loading></Loading>
        ) : (
          <div className="lg:grid grid-cols-3 gap-5 px-5 mt-10">
            {whyChutiDatas.map((whyChutiData) => (
              <LifeAtShantaCoverPhoto
                key={whyChutiData._id}
                whyChutiData={whyChutiData}
              ></LifeAtShantaCoverPhoto>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LifeAtShantaCover;
