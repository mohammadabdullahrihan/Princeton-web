import axios from "axios";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useTeamData from "../../../Hooks/useTeamData";
import AdminOurTeamData from "./AdminOurTeamData";
import useSeniorTeam from "../../../Hooks/useSeniorTeam";
import AdminGetAndDeleteSeniorTeam from "./AdminGetAndDeleteSeniorTeam";
import Loading from "../../../Shared/Loading/Loading";

const AdminOurTeam = () => {
  const [teamData, setTeamData] = useState({
    teamCoverPhoto: "",
    managingDirectorName: "",
    managingDirectorDetails: "",
    managingDirectorImage: "",
    ceoName: "",
    ceoPhoto: "",
    ceoAbout: "",
    ceoAboutMore: "",
    fullTeamImage: "",
    fullTeamDescriptionOne: "",
    fullTeamDescriptionTwo: "",
  });

  const [ourTeamDatas, setOurTeamDatas] = useTeamData();

  const [
    ourSeniorTeams,
    setOurSeniorTeams,
    seniorTeamError,
    seniorTeamLoading,
  ] = useSeniorTeam();

  const [isLoading, setIsLoading] = useState(false);
  const [previewImages, setPreviewImages] = useState({}); // Holds previews of fetched and selected images
  const [error, setError] = useState(null);

  const fileInputRefs = {
    teamCoverPhoto: useRef(null),
    managingDirectorImage: useRef(null),
    ceoPhoto: useRef(null),
    fullTeamImage: useRef(null),
  };

  // Fetch team data from the database
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get(
          "https://chuti-harmony-server.vercel.app/api/v1/team-member/team-member"
        );
        const loadedData = response.data.data;
        setTeamData(loadedData);

        // Set previews for images fetched from the database
        const initialPreviews = {
          teamCoverPhoto: loadedData.teamCoverPhoto,
          managingDirectorImage: loadedData.managingDirectorImage,
          ceoPhoto: loadedData.ceoPhoto,
          fullTeamImage: loadedData.fullTeamImage,
        };
        setPreviewImages(initialPreviews);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch team data");
      }
    };

    fetchedData();
  }, []);

  // Upload image to Imgbb
  const uploadImageToImgbb = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=9f989d9dc9f26cdee1f0e39188190099`,
        formData
      );
      return response.data.data.url;
    } catch (error) {
      console.error(error);
      toast.error("Image upload error");
      return null;
    }
  };

  // Handle image changes
  const handleImageChange = async (field) => {
    const file = fileInputRefs[field].current?.files[0];

    if (file) {
      const previewUrl = URL.createObjectURL(file); // Create a preview URL
      setPreviewImages((prev) => ({ ...prev, [field]: previewUrl })); // Update preview

      const uploadedUrl = await uploadImageToImgbb(file); // Upload to Imgbb
      if (uploadedUrl) {
        setTeamData((prevState) => ({
          ...prevState,
          [field]: uploadedUrl,
        }));
      }
    }
  };

  // Update team data
  const handleTeamUpdate = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.patch(
        "https://chuti-harmony-server.vercel.app/api/v1/team-member/team-member",
        teamData
      );

      if (response.status === 200) {
        toast.success("Updated team data successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update team data");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteTeamMember = async (teamTwoId) => {
    try {
      await axios.delete(
        `https://chuti-harmony-server.vercel.app/api/v1/team-two/team-two/${teamTwoId}`
      );
      // Remove the deleted project from the state
      setOurTeamDatas((prevTeamTwoMembers) =>
        prevTeamTwoMembers.filter(
          (prevTeamTwoMember) => prevTeamTwoMember._id !== teamTwoId
        )
      );
    } catch (err) {
      console.error("Failed to delete project:", err);
      alert("Could not delete the project. Please try again.");
    }
  };

  const handleDeleteSeniorTeamMember = async (seniorTeamId) => {
    try {
      const response = await axios.delete(
        `https://chuti-harmony-server.vercel.app/api/v1/senior-team/senior-team/${seniorTeamId}`
      );

      if (response.status === 200) {
        // Update the senior teams state after successful deletion
        setOurSeniorTeams((prev) =>
          prev.filter((team) => team._id !== seniorTeamId)
        );
        toast.success("Senior team member deleted successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete Senior Team Member");
    }
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center mb-10">Our Team</h1>

        <div className="mb-20">
          <div>
            <Link
              to={"/admin/create-our-team"}
              className="btn btn-success bg-[#8E8A20] border-none text-white hover:bg-[#8E8A20]"
            >
              Create Team
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {ourTeamDatas.map((ourTeamData) => (
              <AdminOurTeamData
                key={ourTeamData._id}
                ourTeamData={ourTeamData}
                onDelete={handleDeleteTeamMember}
              ></AdminOurTeamData>
            ))}
          </div>
        </div>
        <div className="text-3xl text-center my-10 font-bold ">
          <h1>Our Senior Team</h1>
        </div>
        <div className="mb-20">
          <div>
            <Link
              to={"/admin/create-our-senior-team"}
              className="btn btn-success bg-[#8E8A20] border-none text-white hover:bg-[#8E8A20]"
            >
              Create Senior Team
            </Link>
          </div>
          <div className="mb-20">
            <div className="grid grid-cols-3 gap-4 ">
              {seniorTeamLoading ? (
                <div>
                  <Loading></Loading>
                </div>
              ) : seniorTeamError ? (
                <p className="text-red-500">Error: {seniorTeamError}</p>
              ) : (
                ourSeniorTeams.map((team) => (
                  <AdminGetAndDeleteSeniorTeam
                    key={team._id}
                    ourSeniorTeam={team}
                    onDelete={handleDeleteSeniorTeamMember}
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <div className="text-3xl text-center my-10 font-bold ">
          <h1>Update Your Team Information</h1>
        </div>

        <div>
          <form onSubmit={handleTeamUpdate} className="space-y-4">
            <div className="space-y-4 grid lg:grid-cols-2 gap-20 justify-around">
              {/* Team Cover Photo */}
              <div className="border border-gray-300 rounded p-2">
                <label className="font-bold text-xl">Cover Image</label>
                {previewImages.teamCoverPhoto && (
                  <img
                   loading="lazy"
                    src={previewImages.teamCoverPhoto}
                    alt="Cover Preview"
                    className="w-40 h-40 object-cover mb-4"
                  />
                )}
                <input
                  type="file"
                  ref={fileInputRefs.teamCoverPhoto}
                  className="border border-gray-300 rounded w-full p-2"
                  onChange={() => handleImageChange("teamCoverPhoto")}
                />
              </div>

              {/* Managing Director Name */}
              <div className="border border-gray-300 rounded p-2">
                <label className="font-bold text-xl">
                  Managing Director Name
                </label>
                <input
                  type="text"
                  className="border border-gray-300 rounded w-full p-2"
                  value={teamData.managingDirectorName}
                  onChange={(e) =>
                    setTeamData({
                      ...teamData,
                      managingDirectorName: e.target.value,
                    })
                  }
                />
              </div>

              {/* Managing Director Details */}
              <div className="border border-gray-300 rounded p-2">
                <label className="font-bold text-xl">
                  Managing Director Details
                </label>
                <textarea
                  className="textarea textarea-bordered h-40 w-full mt-2"
                  value={teamData.managingDirectorDetails}
                  onChange={(e) =>
                    setTeamData({
                      ...teamData,
                      managingDirectorDetails: e.target.value,
                    })
                  }
                ></textarea>
              </div>

              {/* Managing Director Image */}
              <div className="border border-gray-300 rounded p-2">
                <label className="font-bold text-xl">
                  Managing Director Image
                </label>
                {previewImages.managingDirectorImage && (
                  <img
                   loading="lazy"
                    src={previewImages.managingDirectorImage}
                    alt="MD Preview"
                    className="w-40 h-40 object-cover mb-4"
                  />
                )}
                <input
                  type="file"
                  ref={fileInputRefs.managingDirectorImage}
                  className="border border-gray-300 rounded w-full p-2"
                  onChange={() => handleImageChange("managingDirectorImage")}
                />
              </div>

              {/* CEO Name */}
              <div className="border border-gray-300 rounded p-2">
                <label className="font-bold text-xl">CEO Name</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded w-full p-2"
                  value={teamData.ceoName}
                  onChange={(e) =>
                    setTeamData({
                      ...teamData,
                      ceoName: e.target.value,
                    })
                  }
                />
              </div>

              {/* CEO Photo */}
              <div className="border border-gray-300 rounded p-2">
                <label className="font-bold text-xl">CEO Photo</label>
                {previewImages.ceoPhoto && (
                  <img
                   loading="lazy"
                    src={previewImages.ceoPhoto}
                    alt="CEO Preview"
                    className="w-40 h-40 object-cover mb-4"
                  />
                )}
                <input
                  type="file"
                  ref={fileInputRefs.ceoPhoto}
                  className="border border-gray-300 rounded w-full p-2"
                  onChange={() => handleImageChange("ceoPhoto")}
                />
              </div>

              {/* CEO About */}
              <div className="border border-gray-300 rounded p-2">
                <label className="font-bold text-xl">CEO About</label>
                <textarea
                  className="textarea textarea-bordered h-40 w-full"
                  value={teamData.ceoAbout}
                  onChange={(e) =>
                    setTeamData({
                      ...teamData,
                      ceoAbout: e.target.value,
                    })
                  }
                ></textarea>
              </div>

              {/* Full Team Image */}
              <div className="border border-gray-300 rounded p-2">
                <label className="font-bold text-xl">Full Team Image</label>
                {previewImages.fullTeamImage && (
                  <img
                   loading="lazy"
                    src={previewImages.fullTeamImage}
                    alt="Team Preview"
                    className="w-40 h-40 object-cover mb-4"
                  />
                )}
                <input
                  type="file"
                  ref={fileInputRefs.fullTeamImage}
                  className="border border-gray-300 rounded w-full p-2"
                  onChange={() => handleImageChange("fullTeamImage")}
                />
              </div>

              {/* Full Team Description One */}
              <div className="border border-gray-300 rounded p-2">
                <label className="font-bold text-xl">
                  Full Team Description One
                </label>
                <textarea
                  className="textarea textarea-bordered h-40 w-full"
                  value={teamData.fullTeamDescriptionOne}
                  onChange={(e) =>
                    setTeamData({
                      ...teamData,
                      fullTeamDescriptionOne: e.target.value,
                    })
                  }
                ></textarea>
              </div>

              {/* Full Team Description Two */}
              <div className="border border-gray-300 rounded p-2">
                <label className="font-bold text-xl">
                  Full Team Description Two
                </label>
                <textarea
                  className="textarea textarea-bordered h-40 w-full"
                  value={teamData.fullTeamDescriptionTwo}
                  onChange={(e) =>
                    setTeamData({
                      ...teamData,
                      fullTeamDescriptionTwo: e.target.value,
                    })
                  }
                ></textarea>
              </div>
            </div>

            <div className="space-y-4 space-x-5 grid lg:grid-cols-2 justify-around">
              <input
                className="btn btn-secondary bg-[#8E8A20] hover:bg-lime-900 border-none"
                type="submit"
                value={isLoading ? "Updating..." : "Update Our Team"}
                disabled={isLoading}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminOurTeam;
