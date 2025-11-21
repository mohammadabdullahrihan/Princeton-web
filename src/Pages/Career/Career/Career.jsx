import { useContext } from "react";
import { DarkModeContext } from "../../../Contexts/NightLightContext";
import { MdKeyboardArrowDown } from "react-icons/md";

const Career = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section
      className={`${darkMode ? "text-white" : "text-black"} mt-20 static`}
    >
      <div className="-mb-10 flex justify-center items-center">
        <h1 className={`lg:text-8xl text-center absolute top-20 text-6xl ${darkMode ? "projectWordDesign" : "projectWordDesignForLight"}`}>
          Current Openings
        </h1>
      </div>
      <div className="mx-auto flex justify-center items-center">
        <img
         loading="lazy"
          src="https://i.ibb.co/KwQYxKC/Rectangle-1-7-2e16d0ba-fill-2560x1440-c0-format-avif.jpg"
          alt=""
        />
      </div>
      <div className="mt-20 flex flex-col sm:flex-row lg:ml-40">
        <div className="btn flex justify-between items-center border bg-[#827466] p-2 w-full sm:w-96 border-none rounded-none hover:bg-[#827466]">
          <button className="text-2xl text-white">Filter by Department</button>
          <span className="ml-2">
            <MdKeyboardArrowDown className="text-white" size={24} />
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center my-20">
        <div className="border bg-[#F3EBDD] p-16 h-12 w-full sm:w-3/4 flex justify-center items-center">
          <h1 className="text-2xl font-bold">No Jobs Available</h1>
        </div>
      </div>
    </section>
  );
};

export default Career;
