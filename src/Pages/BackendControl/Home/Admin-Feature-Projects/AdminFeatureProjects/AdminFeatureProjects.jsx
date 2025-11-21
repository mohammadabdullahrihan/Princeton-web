import axios from "axios";
import { useEffect, useState } from "react";
import AdminFeatureProject from "../Admin-Feature-Project/AdminFeatureProject";
import { Link } from "react-router-dom";
import Loading from "../../../../../Shared/Loading/Loading";

const AdminFeatureProjects = () => {
  const [featureProjects, setFeatureProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects from the server
  const fetchFeatureProjects = async () => {
    try {
      const response = await axios.get(
        "https://chuti-harmony-server.vercel.app/api/v1/feature-project/feature-project"
      );
      if (response.data.data) {
        setFeatureProjects(response.data.data);
      }
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFeatureProjects(); // Fetch projects on component mount
  }, []);

  // Handle delete project
  const handleDeleteProject = async (projectId) => {
    try {
      await axios.delete(
        `https://chuti-harmony-server.vercel.app/api/v1/feature-project/feature-project/${projectId}`
      );
      // Remove the deleted project from the state
      setFeatureProjects((prevProjects) =>
        prevProjects.filter((project) => project._id !== projectId)
      );
    } catch (err) {
      console.error("Failed to delete project:", err);
      alert("Could not delete the project. Please try again.");
    }
  };

  return (
    <section className="w-[780px]">
      <div>
        <Link
          className="btn btn-secondary bg-[#a59d2e] hover:bg-gray-600 border-none mb-10 text-white"
          to="/admin/create-project"
        >
          Add New Feature Project
        </Link>
      </div>
      <div>
        {isLoading ? (
          <div>
            <Loading></Loading>
          </div>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <div className="lg:grid grid-cols-2 gap-20">
            {featureProjects?.map((featureProject, index) => (
              <AdminFeatureProject
                key={featureProject._id}
                index={index}
                featureProject={featureProject}
                onDelete={handleDeleteProject} // Pass delete handler to child
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminFeatureProjects;
