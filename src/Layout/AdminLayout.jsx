import { GrFolder } from "react-icons/gr";
import {
  TbArrowBigRightLinesFilled,
  TbArrowBigDownLinesFilled,
} from "react-icons/tb";

import { Link, Outlet } from "react-router-dom";
import "./AdminLayout.css";
import { useEffect, useState } from "react";
import Loading from "../Shared/Loading/Loading";

const AdminLayout = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulates a 2-second delay
    return () => clearTimeout(timer);
  }, []);

  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div className="flex mr-62">
      <div className="overflow-y-auto">
        <div className="h-screen">
          <ul className="menu text-white min-h-full w-80 p-4 bg-[#8E8A20]">
            <div className="text-center mb-20">
              <Link to="/">
                <p>Chuti Harmony</p>
              </Link>
            </div>
            {/* Sidebar content here */}
            <li>
              <Link to={"/admin"}>Dashboard</Link>
            </li>

            <details className="dropdown">
              <summary className="m-1 cursor-pointer flex items-center gap-4">
                <span className="flex items-center gap-2">
                  {" "}
                  <GrFolder />
                </span>{" "}
                Home
                <span className="arrow-right">
                  <TbArrowBigRightLinesFilled />
                </span>
                <span className="arrow-down">
                  <TbArrowBigDownLinesFilled />
                </span>
              </summary>
              <ul className="ml-10">
                <li>
                  <summary className="m-1 cursor-pointer flex items-center gap-4">
                    <span className="flex items-center gap-2">
                      {" "}
                      <GrFolder />
                    </span>{" "}
                    <Link to={"/admin/about-us"}>Portfolio</Link>
                  </summary>
                  <summary className="m-1 cursor-pointer flex items-center gap-4">
                    <span className="flex items-center gap-2">
                      {" "}
                      <GrFolder />
                    </span>{" "}
                    <Link to={"/admin/feature-project"}>Feature Projects</Link>
                  </summary>

                  <summary className="m-1 cursor-pointer flex items-center gap-4">
                    <span className="flex items-center gap-2">
                      {" "}
                      <GrFolder />
                    </span>{" "}
                    <Link to={"/admin/commitment"}>Achievements</Link>
                  </summary>
                  <summary className="m-1 cursor-pointer flex items-center gap-4">
                    <span className="flex items-center gap-2">
                      {" "}
                      <GrFolder />
                    </span>{" "}
                    <Link to={"/admin/explore"}>Explore</Link>
                  </summary>
                </li>
              </ul>
            </details>

            <details className="dropdown">
              <summary className="m-1 cursor-pointer flex items-center gap-4">
                <span className="flex items-center gap-2">
                  {" "}
                  <GrFolder />
                </span>{" "}
                About
                <span className="arrow-right">
                  <TbArrowBigRightLinesFilled />
                </span>
                <span className="arrow-down">
                  <TbArrowBigDownLinesFilled />
                </span>
              </summary>
              <ul className="ml-10">
                <li>
                  <summary className="m-1 cursor-pointer flex items-center gap-4">
                    <span className="flex items-center gap-2">
                      {" "}
                      <GrFolder />
                    </span>{" "}
                    <Link to={"/admin/our-story"}>Our Story</Link>
                  </summary>

                  <summary className="m-1 cursor-pointer flex items-center gap-4">
                    <span className="flex items-center gap-2">
                      {" "}
                      <GrFolder />
                    </span>{" "}
                    <Link to={"/admin/our-team"}>Our Team</Link>
                  </summary>

                  <summary className="m-1 cursor-pointer flex items-center gap-4">
                    <span className="flex items-center gap-2">
                      {" "}
                      <GrFolder />
                    </span>{" "}
                    <Link>Why Chuti</Link>
                  </summary>

                  <summary className="m-1 cursor-pointer flex items-center gap-4">
                    <span className="flex items-center gap-2">
                      {" "}
                      <GrFolder />
                    </span>{" "}
                    <Link>Our Business</Link>
                  </summary>

                  <summary className="m-1 cursor-pointer flex items-center gap-4">
                    <span className="flex items-center gap-2">
                      {" "}
                      <GrFolder />
                    </span>{" "}
                    <Link to="/admin/our-clients">Our Clients</Link>
                  </summary>

                  <summary className="m-1 cursor-pointer flex items-center gap-4">
                    <span className="flex items-center gap-2">
                      {" "}
                      <GrFolder />
                    </span>{" "}
                    <Link>EHS</Link>
                  </summary>

                  <summary className="m-1 cursor-pointer flex items-center gap-4">
                    <span className="flex items-center gap-2">
                      {" "}
                      <GrFolder />
                    </span>{" "}
                    <Link>CSR</Link>
                  </summary>
                </li>
              </ul>
            </details>

            <details className="dropdown">
              <summary className="m-1 cursor-pointer flex items-center gap-4">
                <span className="flex items-center gap-2">
                  {" "}
                  <GrFolder />
                </span>{" "}
                Projects
                <span className="arrow-right">
                  <TbArrowBigRightLinesFilled />
                </span>
                <span className="arrow-down">
                  <TbArrowBigDownLinesFilled />
                </span>
              </summary>
              <ul className="ml-10">
                <li>
                  
                  <summary className="m-1 cursor-pointer flex items-center gap-">
                    <span className="flex items-center gap-2">
                      {" "}
                      <GrFolder />
                    </span>{" "}
                    <Link to={"/admin/all-projects"}>All Projects</Link>
                  </summary>
                </li>
              </ul>
            </details>

            <details className="dropdown">
              <summary className="m-1 cursor-pointer flex items-center gap-4">
                <span className="flex items-center gap-2">
                  {" "}
                  <GrFolder />
                </span>{" "}
                <Link to={"/admin/life-at-chuti"}>Life At Chuti</Link>
              </summary>
            </details>

            <details className="dropdown">
              <summary className="m-1 cursor-pointer flex items-center gap-4">
                <span className="flex items-center gap-2">
                  {" "}
                  <GrFolder />
                </span>{" "}
                <Link to={"/admin/career"}>Careers</Link>
              </summary>
            </details>

            <details className="dropdown">
              <summary className="m-1 cursor-pointer flex items-center gap-4">
                <span className="flex items-center gap-2">
                  {" "}
                  <GrFolder />
                </span>{" "}
                <Link to={"/admin/news-event"}>News & Event</Link>
              </summary>
            </details>

            <details className="dropdown">
              <summary className="m-1 cursor-pointer flex items-center gap-4">
                <span className="flex items-center gap-2">
                  {" "}
                  <GrFolder />
                </span>{" "}
                Contact Us
                <span className="arrow-right">
                  <TbArrowBigRightLinesFilled />
                </span>
                <span className="arrow-down">
                  <TbArrowBigDownLinesFilled />
                </span>
              </summary>
              <ul className="ml-10">
                <li>
                  <summary className="m-1 cursor-pointer flex items-center gap-">
                    <span className="flex items-center gap-2">
                      {" "}
                      <GrFolder />
                    </span>{" "}
                    <Link to={"/admin/connect"}>Contact</Link>
                  </summary>

                  <summary className="m-1 cursor-pointer flex items-center gap-">
                    <span className="flex items-center gap-2">
                      {" "}
                      <GrFolder />
                      <Link to={"/admin/investment"}>Investments</Link>
                    </span>{" "}
                    
                  </summary>

                  {/* <summary className="m-1 cursor-pointer flex items-center gap-">
                    <span className="flex items-center gap-2">
                      {" "}
                      <GrFolder />
                    </span>{" "}
                    <Link to={"/admin/message-box"}>Investment Messages</Link>
                    
                  </summary> */}
                </li>
              </ul>
            </details>
            
            <details className="dropdown">
              <summary className="m-1 cursor-pointer flex items-center gap-4">
                <span className="flex items-center gap-2">
                  {" "}
                  <GrFolder />
                </span>{" "}
                <Link to={"/admin/message-box"}>Investement Message Box</Link>
              </summary>
            </details>
            <details className="dropdown">
              <summary className="m-1 cursor-pointer flex items-center gap-4">
                <span className="flex items-center gap-2">
                  {" "}
                  <GrFolder />
                </span>{" "}
                <Link to={"/admin/message-box"}>Message Box</Link>
              </summary>
            </details>
            <details className="dropdown">
              <summary className="m-1 cursor-pointer flex items-center gap-4">
                <span className="flex items-center gap-2">
                  {" "}
                  <GrFolder />
                </span>{" "}
                <Link to={"/admin/pop-up"}>Pop-Up</Link>
              </summary>
            </details>
          </ul>
        </div>
      </div>
      <div className="px-10 py-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminLayout;
