import { useContext } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useSingleNewsEventDetails from "../../../Hooks/useSingleNewsEventDetails";
import { DarkModeContext } from "../../../Contexts/NightLightContext";
import Loading from "../../../Shared/Loading/Loading";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Ensure autoplay CSS is imported
import { Link } from "react-router-dom";

const SingleNewsAndEventFullDetails = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [singleNewsEventDetail, isLoading, error] = useSingleNewsEventDetails();

  if (isLoading) return <Loading></Loading>;
  if (error) return <div>Error: {error.message}</div>;

  // Debugging: Check if photos are loaded
  console.log("Photos:", singleNewsEventDetail.photos);

  return (
    <section
      className={`${
        darkMode ? "bg-black text-white" : "bg-[#FFFAF4] text-black"
      } px-4 sm:px-6 lg:px-40 font-sans`}
    >
      <div>
        <h1 className="text-gray-500 text-sm sm:text-base">News & Event</h1>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl uppercase mt-2">
          {singleNewsEventDetail.title}
        </h1>
        <p className="my-3 sm:my-5 text-sm sm:text-base">
          {singleNewsEventDetail.date}
        </p>
        <div className="border border-gray-500 mb-5"></div>
        <img
          loading="lazy"
          src={singleNewsEventDetail.coverphoto}
          alt="Cover"
          className="w-full h-auto"
        />
        <Link to={singleNewsEventDetail.newsEventSourceLink}>
          <p className="my-3 sm:my-5 text-base sm:text-xl">
            Source:{" "}
            <span className="text-[#8F8933] tracking-wide">
              {singleNewsEventDetail.source}
            </span>
          </p>
        </Link>
        <p className="text-base sm:text-xl">
          Date: <span className="ml-2">{singleNewsEventDetail.date}</span>
        </p>

        {/* Render descriptions */}
        {[
          singleNewsEventDetail.description1,
          singleNewsEventDetail.description2,
          singleNewsEventDetail.description3,
          singleNewsEventDetail.description4,
          singleNewsEventDetail.description5,
          singleNewsEventDetail.description6,
          singleNewsEventDetail.description7,
          singleNewsEventDetail.description8,
        ].map(
          (description, index) =>
            description && (
              <p key={index} className="mt-3 sm:mt-5 text-sm sm:text-lg">
                {description}
              </p>
            )
        )}

        {/* Swiper for Photos */}
        <div className="mt-8 sm:mt-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-5">Photos</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1} // Default for small screens
            breakpoints={{
              640: {
                slidesPerView: 2, // 2 slides for screens ≥ 640px
              },
              1024: {
                slidesPerView: 3, // 3 slides for screens ≥ 1024px
              },
            }}
            navigation
            autoplay={{
              delay: 2500, // Autoplay delay in milliseconds
              disableOnInteraction: false, // Continue autoplay after user interaction
            }}
            pagination={{ clickable: true }}
            loop={true}
          >
            {singleNewsEventDetail.photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <img
                  loading="lazy"
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SingleNewsAndEventFullDetails;
