import { useContext } from "react";
import { DarkModeContext } from "../../../../Contexts/NightLightContext";
import useOurBusinessPhoto from "../../../../Hooks/useOurBusinessPhoto";
import OurBusinessSinglePhoto from "./OurBusinessSinglePhoto";
import Loading from "../../../../Shared/Loading/Loading";

const OurBusinessTitleAndPhoto = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [ourBusinessPhotos, isLoading, error] = useOurBusinessPhoto();

  return (
    <section>
      <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-20">
        <h1
          className={`${
            darkMode ? "text-white" : "text-black"
          } lg:text-8xl text-center`}
        >
          OUR BUSINESS
        </h1>
      </div>

      {/* <div className="grid grid-cols-3 gap-5 p-20">
        {isLoading ? (
          <Loading />
        ) : error ? (
          <p className="text-red-500 text-center">
            {error.message || "Something went wrong"}
          </p>
        ) : ourBusinessPhotos.length > 0 ? (
          ourBusinessPhotos.map((ourBusinessPhoto) => (
            <OurBusinessSinglePhoto
              key={ourBusinessPhoto._id}
              ourBusinessPhoto={ourBusinessPhoto}
            />
          ))
        ) : (
          <p className="text-center">No business photos found.</p>
        )}
      </div> */}
    </section>
  );
};

export default OurBusinessTitleAndPhoto;
