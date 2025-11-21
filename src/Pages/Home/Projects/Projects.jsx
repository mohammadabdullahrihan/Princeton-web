import { useContext, useEffect } from "react";
// import ProjectInMap from "./ProjectInMap/ProjectInMap";
import "./Projects.css";
import "mapbox-gl/dist/mapbox-gl.css";
import AOS from "aos";
import { DarkModeContext } from "../../../Contexts/NightLightContext";

// import backgroundImage from "../../../"

const Projects = () => {
  const { darkMode } = useContext(DarkModeContext);

  // useEffect(() => {
  //   AOS.init({
  //     duration: 3000, // Animation duration in ms
  //     once: false, // Repeats animation
  //     mirror: false, // Disable reverse animation
  //     offset: 0,
  //   });
  // }, []);

  return (
    <section className={`mb-20 font-familyProjects`}>
      <div data-aos="fade-left" className="flex justify-end mr-20 mb-8">
        <h1
          className={`lg:text-8xl font-bold uppercase ${
            darkMode ? "projectWordDesign" : "projectWordDesignForLight"
          }  ${darkMode ? "" : "font-bold"}`}
        >
          Projects
        </h1>
      </div>
    </section>
  );
};

export default Projects;
