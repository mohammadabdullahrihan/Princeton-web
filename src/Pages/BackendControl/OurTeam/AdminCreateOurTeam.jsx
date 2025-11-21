import axios from "axios";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const AdminCreateOurTeam = () => {
  const [teamTwoData, setTeamTwoData] = useState({
    name: "",
    designation: "",
    bio: "",
    photo: "",
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
      toast.success("Image uploaded successfully");
      return response.data.data.url;
    } catch (error) {
      console.error("Image upload error:", error);
      toast.error("Image upload failed");
      return null;
    }
  };

  const handleCreateTeamTwo = async (event) => {
    event.preventDefault();

    // Validate required fields
    if (
      !teamTwoData.name ||
      !teamTwoData.designation ||
      !teamTwoData.bio ||
      (!teamTwoData.photo && !fileInputRef.current?.files[0])
    ) {
      toast.error("All fields are required!");
      return;
    }
    try {
      let imageUrl = teamTwoData.photo;
      if (fileInputRef.current?.files[0]) {
        const file = fileInputRef.current.files[0];
        imageUrl = await uploadImageToImgBB(file);
        if (!imageUrl) {
          throw new Error("Image upload failed");
        }
      }

      const newTeamTwoData = {
        name: teamTwoData.name,
        designation: teamTwoData.designation,
        bio: teamTwoData.bio,
        photo: imageUrl,
      };

      console.log("Payload being sent to backend:", newTeamTwoData);

      const response = await axios.post(
        `https://chuti-harmony-server.vercel.app/api/v1/team-two/team-two`,
        newTeamTwoData
      );

      if (response.status === 200) {
        toast.success("Team Created Successfully");
        setTeamTwoData({
          name: "",
          designation: "",
          bio: "",
          photo: "",
        });
        setSelectedImage(null);
      } else {
        console.error("Unexpected response:", response);
        toast.error("Failed to create the team");
      }
    } catch (error) {
      console.error("Error during team creation:", error);
      toast.error("Failed to create the team");
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold mb-5">Create New Team</h1>
      <Link
        to={"/admin/our-team"}
        className="btn btn-primary text-white w-20 mb-5"
      >
        <FaArrowAltCircleLeft />
      </Link>
      <form onSubmit={handleCreateTeamTwo}>
        <div className="space-y-4">
          <label className="text-xl">Team Member Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded w-full p-2 mb-5"
            value={teamTwoData.name || ""}
            onChange={(event) =>
              setTeamTwoData({ ...teamTwoData, name: event.target.value })
            }
            placeholder="Team Member Name"
          />

          <label className="text-xl">Team Member Designation</label>
          <input
            type="text"
            className="border border-gray-300 rounded w-full p-2"
            value={teamTwoData.designation || ""}
            placeholder="Team Member Designation"
            onChange={(event) =>
              setTeamTwoData({
                ...teamTwoData,
                designation: event.target.value,
              })
            }
          />

          <label className="text-xl">Team Member Bio</label>
          <textarea
            className="border border-gray-300 rounded w-full p-2"
            placeholder="Team Member Bio"
            value={teamTwoData.bio || ""}
            onChange={(event) =>
              setTeamTwoData({ ...teamTwoData, bio: event.target.value })
            }
          />

          <label className="text-xl">Team Member Photo</label>
          {selectedImage && (
            <img
             loading="lazy"
              className="w-1/4 mb-3 object-cover"
              src={selectedImage}
              alt="Preview"
            />
          )}
          <input
            type="file"
            className="border border-gray-300 rounded w-full p-2"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          <input
            type="submit"
            className="btn btn-primary text-white bg-[#8E8A20] border border-gray-300 rounded w-full p-2"
            value="Create Team Member"
          />
        </div>
      </form>
    </div>
  );
};

export default AdminCreateOurTeam;
