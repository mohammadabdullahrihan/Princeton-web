import { Link } from "react-router-dom";
import AdminAllProjectData from "../AdminAllProjectData/AdminAllProjectData";
import useProjectFullDetails from "../../../../Hooks/useProjectFullDetails";
import Loading from "../../../../Shared/Loading/Loading";

const AdminAllProjects = () => {
  const [ongoingProjectFullDetails, error, loading] = useProjectFullDetails();

  return (
    <div className="font-sans">
      <div>
        <h1>All Projects</h1>
      </div>
      <div className="mt-10">
        <Link
          to={"/admin/create-admin-project"}
          className="border border-gray-500 p-2 rounded bg-[#8E8A20] text-white font-sans"
        >
          Create Project
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-10">
        {loading ? (
          <Loading></Loading>
        ) : (
          ongoingProjectFullDetails.map((projectFullDetail, index) => (
            <AdminAllProjectData
              key={projectFullDetail._id}
              projectFullDetail={projectFullDetail}
              index={index}
            ></AdminAllProjectData>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminAllProjects;
