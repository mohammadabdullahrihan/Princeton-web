import { useNavigate } from "react-router-dom";

const AdminFeatureProject = ({ featureProject, index, onDelete }) => {
  const { _id, projectType, projectName, address, projectImg, projectVideo } =
    featureProject;

  const navigate = useNavigate();

  const handleEditProject = () => {
    navigate(`/admin/feature-project/${_id}`);
  };

  const handleDeleteProject = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (confirmDelete) {
      onDelete(_id); // Notify parent to update the project list
    }
  };

  return (
    <div className="border border-gray-700 p-5 rounded-md">
      <div>
        <h1 className="text-xl font-bold mb-2">Project: {index + 1}</h1>
      </div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Type of Project</h1>
          <input
            className="border border-black rounded w-60 h-10 p-2 mb-5 mt-3"
            type="text"
            readOnly
            placeholder="What type of project?"
            defaultValue={projectType}
          />
          <h3>Name of your project</h3>
          <input
            className="border border-black rounded w-60 h-10 p-2 mb-5 mt-3"
            type="text"
            readOnly
            placeholder="Name of your project"
            defaultValue={projectName}
          />
          <h3>Address of your project</h3>
          <input
            className="border border-black rounded w-60 h-10 p-2 mb-5 mt-3"
            type="text"
            readOnly
            placeholder="Address Bar"
            defaultValue={address}
          />
          <h3 className="mb-5">Image of your project</h3>
          <img loading="lazy" className="w-3/4 h-2/4" src={projectImg} alt="Preview" />
          <h3 className="my-5">Video of your project</h3>
          <a
            href={projectVideo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-white bg-[#a89f20] hover:bg-slate-600 border-none mb-5"
          >
            Watch Video
          </a>

          <br />
          <button
            type="button"
            onClick={handleEditProject}
            className="btn btn-wide btn-warning"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={handleDeleteProject}
            className="btn btn-error ml-2 mt-5"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminFeatureProject;
