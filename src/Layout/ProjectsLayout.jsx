import { Outlet } from "react-router-dom";

import ProjectsNavbar from "../Shared/Navbar/ProjectsNavbar/ProjectsNavbar";

const ProjectsLayout = () => {
    return (
        <div>
            <ProjectsNavbar></ProjectsNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default ProjectsLayout;