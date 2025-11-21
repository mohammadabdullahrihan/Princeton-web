import { useState } from "react";
import axios from "axios";
import { FaArrowLeftLong } from "react-icons/fa6";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AdminCreateExplore = () => {
  const [project, setProject] = useState({ name: "", url: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (key, value) => {
    setProject((prev) => ({ ...prev, [key]: value }));
  };

  const handleCreateProject = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://chuti-harmony-server.vercel.app/api/v1/explore-project/explore-project",
        project
      );

      if (response.status === 201 || response.status === 200) {
        toast.success("Project created successfully!");
        setProject({ name: "", url: "" }); // Clear inputs
      } else {
        toast.error("Unexpected Error");
      }
    } catch (error) {
      console.error("Error creating project:", error);
      toast.error("Failed to create project");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Explore Our Project</h2>
      <Link
        to="/admin/explore"
        className="btn btn-primary mb-5 text-white border-none bg-[#8E8A20] hover:bg-[#b4b02e]"
      >
        {" "}
        <FaArrowLeftLong /> Back
      </Link>
      <form onSubmit={handleCreateProject} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            value={project.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="border border-gray-300 rounded w-full p-2"
            required
          />
        </div>
        <div>
          <label className="font-medium">Video or Image URL</label>
          <input
            type="text"
            value={project.url}
            onChange={(e) => handleInputChange("url", e.target.value)}
            className="border border-gray-300 rounded w-full p-2"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`btn btn-primary ${isLoading ? "opacity-50" : ""}`}
        >
          {isLoading ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default AdminCreateExplore;
