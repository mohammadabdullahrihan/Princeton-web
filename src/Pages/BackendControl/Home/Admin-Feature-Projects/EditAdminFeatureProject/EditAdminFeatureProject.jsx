import axios from "axios";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const EditAdminFeatureProject = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  // For image upload and preview
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null); // Ref for file input

  useEffect(() => {
    fetch(
      `https://chuti-harmony-server.vercel.app/api/v1/feature-project/feature-project/${projectId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProject(data.data);
      });
  }, [projectId]);

  // Handle image selection and preview
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Correct usage of 'files'
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Preview the selected image
    }
  };

  // Upload image to ImgBB
  const uploadImageToImgBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=9f989d9dc9f26cdee1f0e39188190099`,
        formData
      );

      const imageUrl = response.data.data.url;
      toast.success("Image uploaded successfully!");
      return imageUrl;
    } catch (error) {
      toast.error("Image upload failed");
      console.error(error);
      return null;
    }
  };

  const handleEditProject = async (event) => {
    event.preventDefault();

    try {
      // Upload image if a new image is selected
      let imageUrl = project.projectImg;
      if (selectedImage && fileInputRef.current?.files[0]) {
        const file = fileInputRef.current.files[0];
        imageUrl = await uploadImageToImgBB(file);
      }

      // Update the project data
      const updatedProject = { ...project, projectImg: imageUrl };
      const response = await axios.patch(
        `https://chuti-harmony-server.vercel.app/api/v1/feature-project/feature-project/${projectId}`,
        updatedProject
      );
      setProject(response.data);
      toast.success("Project updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update your data");
    }
  };

  if (!project) {
    return (
      <div>
        <p>.....Loading</p>
    </div>
    );
  }

  return (
    <section className="lg:w-[800px] -mt-10">
      <div>
        <Link
          to="/admin/feature-project"
          className="btn btn-primary mb-5 text-white border-none bg-[#8E8A20] hover:bg-[#b4b02e]"
        >
          {" "}
          <FaArrowLeftLong /> Back
        </Link>
      </div>
      <div className="border border-gray-700 p-5 ">
        <form onSubmit={handleEditProject}>
          <h1>Type of Project</h1>
          <input
            onChange={(event) =>
              setProject({ ...project, projectType: event.target.value })
            }
            className="border border-black rounded w-60 h-10 p-2 mb-5 mt-3"
            type="text"
            placeholder="What type of project?"
            defaultValue={project.projectType}
          />
          <h3>Name of your project</h3>
          <input
            onChange={(event) =>
              setProject({ ...project, projectName: event.target.value })
            }
            className="border border-black rounded w-60 h-10 p-2 mb-5 mt-3"
            type="text"
            placeholder="Name of your project"
            defaultValue={project.projectName}
          />
          <h3>Address of your project</h3>
          <input
            onChange={(event) =>
              setProject({ ...project, projectAddress: event.target.value })
            }
            className="border border-black rounded w-60 h-10 p-2 mb-5 mt-3"
            type="text"
            placeholder="Address Bar"
            defaultValue={project.address}
          />
          <h3 className="mb-5">Image of your project</h3>
          {selectedImage ? (
            <img
             loading="lazy"
              className="w-3/4 h-2/4 mb-3"
              src={selectedImage}
              alt="Preview"
            />
          ) : (
            <img
             loading="lazy"
              className="w-3/4 h-2/4 mb-3"
              src={project.projectImg}
              alt="Project"
            />
          )}
          <input
            className="mt-5"
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
          <h3 className="my-5">Video of your project</h3>
          <a
            href={project.projectVideo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary bg-[#a89f20] hover:bg-gray-600 text-white  border-none mb-5"
          >
            Watch Video
          </a>

          <input
            onChange={(event) =>
              setProject({ ...project, projectVideo: event.target.value })
            }
            className="border border-black rounded lg:w-96 h-10 p-2 mb-5 mt-3 ml-5 "
            type="text"
            placeholder="Video URL"
            defaultValue={project.projectVideo}
          />

          <br />
          <input
            value={"Save Update"}
            type="submit"
            className="btn btn-wide btn-warning"
          />
        </form>
      </div>
    </section>
  );
};

export default EditAdminFeatureProject;
