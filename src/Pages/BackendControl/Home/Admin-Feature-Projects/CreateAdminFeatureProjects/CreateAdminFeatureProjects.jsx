import axios from "axios";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CreateAdminFeatureProjects = () => {
  const [project, setProject] = useState({
    projectType: "",
    projectName: "",
    address: "", // Updated key to match backend
    projectImg: "",
    projectVideo: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const uploadImageToImgBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=9f989d9dc9f26cdee1f0e39188190099`,
        formData
      );
      toast.success("create project successfully");
      return response.data.data.url;
    } catch (error) {
      console.error("Image upload error:", error);
      toast.error("Image upload failed");
      return null;
    }
  };

  const handleCreateFeatureProject = async (event) => {
    event.preventDefault();

    try {
      let imageUrl = project.projectImg;
      if (selectedImage && fileInputRef.current?.files[0]) {
        const file = fileInputRef.current.files[0];
        imageUrl = await uploadImageToImgBB(file);
        if (!imageUrl) {
          throw new Error("Image upload failed");
        }
      }

      const newProject = {
        projectType: project.projectType,
        projectName: project.projectName,
        address: project.address,
        projectImg: imageUrl,
        projectVideo: project.projectVideo,
      };

      console.log("Sending data to API:", newProject); // Debugging

      const response = await axios.post(
        "https://chuti-harmony-server.vercel.app/api/v1/feature-project/create-feature-project",
        newProject
      );

      if (response.status === 201) {
        toast.success("Project created successfully!");
        setProject({
          projectType: "",
          projectName: "",
          address: "",
          projectImg: "",
          projectVideo: "",
        });
        setSelectedImage(null);
      }
    } catch (error) {
      console.error("Error creating project:", error);
      toast.error("Failed to create the project");
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl  font-bold text-center mb-10">
          Create Project
        </h1>
        <Link
          to="/admin/feature-project"
          className="btn btn-primary mb-5 text-white border-none bg-[#8E8A20] hover:bg-[#b4b02e]"
        >
          {" "}
          <FaArrowLeftLong /> Back
        </Link>
      </div>
      <div className="border border-gray-700 p-5">
        <form onSubmit={handleCreateFeatureProject}>
          <h1>Type of Project</h1>
          <input
            onChange={(event) =>
              setProject({ ...project, projectType: event.target.value })
            }
            className="border border-black rounded w-60 h-10 p-2 mb-5 mt-3"
            type="text"
            placeholder="What type of project?"
            value={project.projectType}
          />
          <h3>Name of your project</h3>
          <input
            onChange={(event) =>
              setProject({ ...project, projectName: event.target.value })
            }
            className="border border-black rounded w-60 h-10 p-2 mb-5 mt-3"
            type="text"
            placeholder="Name of your project"
            value={project.projectName}
          />
          <h3>Address of your project</h3>
          <input
            onChange={
              (event) => setProject({ ...project, address: event.target.value }) // Updated key
            }
            className="border border-black rounded w-60 h-10 p-2 mb-5 mt-3"
            type="text"
            placeholder="Address"
            value={project.address}
          />
          <h3 className="mb-5">Image of your project</h3>
          {selectedImage && (
            <img
             loading="lazy"
              className="w-3/4 h-2/4 mb-3"
              src={selectedImage}
              alt="Preview"
            />
          )}
          <input
            className="mt-5"
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
          <h3 className="my-5">Video of your project</h3>
          <input
            onChange={(event) =>
              setProject({ ...project, projectVideo: event.target.value })
            }
            className="border border-black rounded lg:w-96 h-10 p-2 mb-5 mt-3"
            type="text"
            placeholder="Video URL"
            value={project.projectVideo}
          />
          <br />
          <input
            value={"Create Project"}
            type="submit"
            className="btn btn-wide btn-warning"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateAdminFeatureProjects;
