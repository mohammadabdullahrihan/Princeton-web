import { useNavigate } from "react-router-dom";

const AllNewsAndEvent = ({ allNewsAndEvent }) => {
  const { _id, title, coverphoto, date, newsOrEvent } = allNewsAndEvent;

  const navigate = useNavigate();

  const handleRedirectToFullDetails = () => {
    navigate(`/news-events/${_id}`);
  };

  return (
    <div
      className="relative cursor-pointer"
      onClick={handleRedirectToFullDetails}
    >
      <div className="relative">
        <img
          loading="lazy"
          className="mt-5 w-full h-auto object-cover"
          src={coverphoto}
          alt={title}
        />
        <h1
          className="day_outline mt-5"
          style={{
            color: "transparent",
            fontSize: "clamp(40px, 8vw, 101px)", // Responsive font size
            fontWeight: 500,
            WebkitTextStroke: "1px #fff",
            display: "inline-block",
            lineHeight: "95%",
            paddingLeft: "10px",
            position: "absolute",
            zIndex: 4,
            top: 0,
            left: 0,
          }}
        >
          {date}
        </h1>
      </div>

      <div className="bg-[#FFFAF4]">
        <div className="flex justify-end mt-5">
          <h1 className="border border-gray-600 text-xs sm:text-sm rounded-full px-2 py-1 sm:px-3 sm:py-2">
            {newsOrEvent}
          </h1>
        </div>

        <div className="bg-[#FFFAF4] mb-10 sm:mb-20 p-2 sm:p-4">
          <h1 className="text-lg sm:text-2xl mt-2 sm:mt-4">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default AllNewsAndEvent;
