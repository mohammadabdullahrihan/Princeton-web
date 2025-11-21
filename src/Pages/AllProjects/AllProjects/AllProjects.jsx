import { useContext, useState } from "react";
import projectPageBackground from "../../../assets/images/projects/project-cover.jpg";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import { Link } from "react-router-dom";
import useProjectFullDetails from "../../../Hooks/useProjectFullDetails";
import AllProject from "./AllProject";
import { DarkModeContext } from "../../../Contexts/NightLightContext";

const AllProjects = () => {
  
  const {darkMode} = useContext(DarkModeContext);

  const [hoveredDropdown, setHoveredDropdown] = useState(null); // Track which dropdown is hovered
  const [projects, error, loading] = useProjectFullDetails(); // Assuming this hook fetches all projects
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="bg-[#FFFAF4]">
      <div className="">
        <img
         loading="lazy"
          className="-mt-16 md:-mt-5 lg:-mt-5"
          src={projectPageBackground}
          alt="Project Cover"
        />
        <h1 className={`${darkMode ? "text-white" : "text-black"} text-4xl md:text-6xl lg:text-8xl uppercase text-center text-white -mt-20 md:-mt-40 lg:-mt-60`}>
          Exclusive properties in prime location
        </h1>
      </div>
      <div className="absolute bg-[#827466] p-4 w-full md:w-[72rem] mt-5 left-1/2 transform -translate-x-1/2 grid grid-cols-1 md:grid-cols-3 gap-4 z-10">
        {/* Project Type Dropdown */}
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="m-1 text-white text-lg md:text-xl">
            <span className="flex items-center gap-2">
              Project Type
              {hoveredDropdown === "type" ? (
                <MdOutlineKeyboardArrowUp className="mt-1 md:mt-2" />
              ) : (
                <MdOutlineKeyboardArrowDown className="mt-1 md:mt-2" />
              )}
            </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu overflow-auto text-lg md:text-xl z-[1] w-52 h-28 p-2 shadow border-none bg-[#827466] text-white"
          >
            <li>
              <a>Residential</a>
            </li>
            <li>
              <a>Commercial</a>
            </li>
          </ul>
        </div>

        {/* Status Dropdown */}
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="m-1 text-white text-lg md:text-xl"
            onMouseEnter={() => setHoveredDropdown("status")}
            onMouseLeave={() => setHoveredDropdown(null)}
          >
            <span className="flex items-center gap-2">
              Status
              {hoveredDropdown === "status" ? (
                <MdOutlineKeyboardArrowUp className="mt-1 md:mt-2" />
              ) : (
                <MdOutlineKeyboardArrowDown className="mt-1 md:mt-2" />
              )}
            </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu overflow-auto text-lg md:text-xl z-[1] w-52 h-42 p-2 shadow border-none bg-[#827466] text-white absolute"
          >
            <li>
              <Link to={"/projects/ongoing-project"}>Ongoing</Link>
            </li>
            <li>
              <Link to={"/projects/upcoming-projects"}>Upcoming</Link>
            </li>
            <li>
              <Link to={"/projects/completed-projects"}>Completed</Link>
            </li>
          </ul>
        </div>

        {/* Search Input */}
        <div className="form-control">
          <input
            type="text"
            placeholder="Search Projects"
            className="input input-bordered w-full md:w-auto rounded-none bg-[#827466] text-[#fff]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-40  justify-items-center mx-4 md:mx-32 mt-40 md:mt-40 mb-20 bg-[#FFFAF4] relative z-0">
        {error && <p className="text-red-500 text-center">{error.message}</p>}
        {projects.map((project) => (
          <AllProject
            key={project._id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default AllProjects;