import { Link } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import AdminCreateProjectData from "./AdminCreateProjectData";

const AdminCreateProject = () => {
  return (
    <div className="font-sans">
      <div className="text-center font-bold text-2xl">
        <h1>Add New project</h1>
      </div>
      <div className="mt-5">
        <Link
          to={"/admin/all-projects"}
          className="btn btn-primary hover:text-gray-300"
        >
          <IoArrowBackCircleOutline className="w-7 h-7 " /> Back
        </Link>
      </div>
      <div>
        <AdminCreateProjectData></AdminCreateProjectData>
      </div>
    </div>
  );
};

export default AdminCreateProject;
