import { useState } from "react";
import projectPageBackground from "../../../assets/images/projects/project-cover.jpg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import useProjectFullDetails from "../../../Hooks/useProjectFullDetails";
import { Link } from "react-router-dom";
import UpComingProject from "./upComingProject";

const UpComingProjects = () => {
  const [hoveredDropdown, setHoveredDropdown] = useState(null); // Track which dropdown is hovered
  const [selectedStatus, setSelectedStatus] = useState("Upcoming");
  const [ongoingProjectFullDetails, error] = useProjectFullDetails();

  const filteredProjects = ongoingProjectFullDetails.filter(
    (project) => project.status === selectedStatus
  );
  return (
    <section className="bg-[#FFFAF4]">
      <div className="">
        <img
         loading="lazy"
          className="w-full h-96 -mt-32"
          src={projectPageBackground}
          alt=""
        />
        <h1 className="text-8xl uppercase text-center text-white -mt-60">
          Exclusive properties in prime location
        </h1>
      </div>
      <div className="absolute bg-[#827466] p-4 w-[72rem] mt-5 left-1/2 transform -translate-x-1/2 grid grid-cols-3 gap-4 z-10">
        {/* All Locations Dropdown */}
        {/* <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="m-1 text-[#fff] text-xl"
            onMouseEnter={() => setHoveredDropdown("locations")}
            onMouseLeave={() => setHoveredDropdown(null)}
          >
            <span className="flex items-center gap-2">
              All Locations
              {hoveredDropdown === "locations" ? (
                <MdOutlineKeyboardArrowUp className="mt-2" />
              ) : (
                <MdOutlineKeyboardArrowDown className="mt-2" />
              )}
            </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu overflow-auto text-xl z-[1] w-52 h-60 p-2 shadow border-none bg-[#827466] text-white"
          >
            <li>
              <a>Banani</a>
            </li>
            <li>
              <a>Gulsan</a>
            </li>
            <li>
              <a>Baridhara</a>
            </li>
            <li>
              <a>Tejgoan</a>
            </li>
            <li>
              <a>Mirpur</a>
            </li>
          </ul>
        </div> */}

        {/* Project Type Dropdown */}
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="m-1 text-white text-xl ">
            <span className="flex items-center gap-2">
              Project Type
              {hoveredDropdown === "status" ? (
                <MdOutlineKeyboardArrowUp className="mt-2" />
              ) : (
                <MdOutlineKeyboardArrowDown className="mt-2" />
              )}
            </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu overflow-auto text-xl z-[1] w-52 h-28 p-2 shadow border-none bg-[#827466] text-white "
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
            className="m-1 text-white text-xl"
            onMouseEnter={() => setHoveredDropdown("status")}
            onMouseLeave={() => setHoveredDropdown(null)}
          >
            <span className="flex items-center gap-2">
              Status
              {hoveredDropdown === "status" ? (
                <MdOutlineKeyboardArrowUp className="mt-2" />
              ) : (
                <MdOutlineKeyboardArrowDown className="mt-2" />
              )}
            </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu overflow-auto text-xl z-[1] w-52 h-42 p-2 shadow border-none bg-[#827466] text-white absolute"
          >
            <li>
              <Link onClick={() => setSelectedStatus("Ongoing")}>Ongoing</Link>
            </li>
            <li>
              <Link onClick={() => setSelectedStatus("Upcoming")}>
                Upcoming
              </Link>
            </li>
            <li>
              <Link onClick={() => setSelectedStatus("Completed")}>
                Completed
              </Link>
            </li>
          </ul>
        </div>

        {/* Search Input */}
        <div className="form-control">
          <input
            type="text"
            placeholder="Search Projets"
            className="input input-bordered w-24 md:w-auto rounded-none bg-[#827466] text-[#fff]"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 justify-items-center mx-32  mt-40 mb-20 bg-[#FFFAF4] relative z-0">
        {error && <p className="text-red-500 text-center">{error.message}</p>}
        {filteredProjects.map((ongoingProjectFullDetail) => (
          <UpComingProject
            key={ongoingProjectFullDetail._id}
            ongoingProjectFullDetail={ongoingProjectFullDetail}
          />
        ))}
      </div>
    </section>
  );
};

export default UpComingProjects;
