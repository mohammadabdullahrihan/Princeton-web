import { Link } from "react-router-dom";

const AllNews = () => {
  return (
    <section className="lg:p-20 lg:ml-0 ml-5 bg-[#FFFAF4] lg:-mt-20">
      <div className="lg:flex gap-20">
        <Link to="/all">
          <h1 className="hover:bg-gray-500 hover:text-white border border-gray-500 h-10 w-10 flex items-center justify-center rounded-full transition-all duration-300">
            All
          </h1>
        </Link>
        <Link to="/news">
          <h1 className="hover:bg-gray-500 hover:text-white hover:border border-gray-500 h-10 w-20 flex items-center justify-center rounded-full transition-all duration-300">
            News
          </h1>
        </Link>
        <Link to="/event">
          <h1 className="hover:bg-gray-500 hover:text-white hover:border border-gray-500 h-10 w-20 flex items-center justify-center rounded-full transition-all duration-300">
            Event
          </h1>
        </Link>
      </div>
      <div></div>
    </section>
  );
};

export default AllNews;