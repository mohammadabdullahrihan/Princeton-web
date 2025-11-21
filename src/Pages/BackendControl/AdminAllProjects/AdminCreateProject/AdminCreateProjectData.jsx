import axios from "axios";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

const AdminCreateProjectData = () => {
  const [adminCreateProjectData, setAdminCreateProjectData] = useState({
    projectName: "",
    status: "",
    address: "",
    architectName: "",
    landArea: "",
    facing: "",
    frontRoad: "",
    sizeOfUnits: "",
    numberOfCarParking: "",
    landScapingConsultant: "",
    loadOrientation: "",
    specialtyOfTheLand: "",
    numberOfApartments: "",
    numberOfBasements: "",
    rajukApprovalNo: "",
    projectCoverPhoto: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  const uploadImageIntoImgBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=9f989d9dc9f26cdee1f0e39188190099`,
        formData
      );
      return response.data.data.url;
    } catch (error) {
      toast.error(`Photo uploaded failed`, error);
      return null;
    }
  };

  const handleAdminCreateProjectData = async (event) => {
    event.preventDefault();

    if (
      !adminCreateProjectData.projectName ||
      !adminCreateProjectData.status ||
      !adminCreateProjectData.address ||
      !adminCreateProjectData.architectName ||
      !adminCreateProjectData.landArea ||
      !adminCreateProjectData.facing ||
      !adminCreateProjectData.frontRoad ||
      !adminCreateProjectData.sizeOfUnits ||
      !adminCreateProjectData.numberOfCarParking ||
      !adminCreateProjectData.landScapingConsultant ||
      !adminCreateProjectData.loadOrientation ||
      !adminCreateProjectData.specialtyOfTheLand ||
      !adminCreateProjectData.numberOfApartments ||
      !adminCreateProjectData.numberOfBasements ||
      !adminCreateProjectData.rajukApprovalNo ||
      (!adminCreateProjectData.projectCoverPhoto &&
        !fileInputRef.current?.files[0])
    ) {
      toast.error("All fields are required");
      return;
    }

    try {
      let imageUrl = adminCreateProjectData.projectCoverPhoto;

      // Upload image if a new one is selected
      if (fileInputRef.current?.files[0]) {
        const file = fileInputRef.current.files[0];
        imageUrl = await uploadImageIntoImgBB(file);
        if (!imageUrl) {
          throw new Error("Image upload failed");
        }
      }

      // Add the image URL to the payload
      const newAdminCreateProjectData = {
        ...adminCreateProjectData,
        projectCoverPhoto: imageUrl, // Ensure the image URL is included
      };

      console.log("Payload sent to backend:", newAdminCreateProjectData);

      // Send the payload to the backend
      const response = await axios.post(
        `https://chuti-harmony-server.vercel.app/api/v1/project-details/project-details`,
        newAdminCreateProjectData
      );

      if (response.status === 200) {
        toast.success("Create Project Data successfully");
        // Reset form data
        setAdminCreateProjectData({
          projectName: "",
          status: "",
          address: "",
          architectName: "",
          landArea: "",
          facing: "",
          frontRoad: "",
          sizeOfUnits: "",
          numberOfCarParking: "",
          landScapingConsultant: "",
          loadOrientation: "",
          specialtyOfTheLand: "",
          numberOfApartments: "",
          numberOfBasements: "",
          rajukApprovalNo: "",
          projectCoverPhoto: "",
        });
        setSelectedImage(null);
      } else {
        toast.error("Failed to create data");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="mt-5">
      <form onSubmit={handleAdminCreateProjectData}>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Project Name: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            value={adminCreateProjectData.projectName || ""}
            onChange={(event) =>
              setAdminCreateProjectData({
                ...adminCreateProjectData,
                projectName: event.target.value,
              })
            }
            type="text"
          />
        </div>

        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Status: </p>
          <select
            className="select select-primary w-96"
            onChange={(event) =>
              setAdminCreateProjectData({
                ...adminCreateProjectData,
                status: event.target.value,
              })
            }
            required
          >
            <option disabled value="">
              Select Project Status
            </option>
            <option disabled selected>
              Select Your Project Status
            </option>
            <option>Ongoing</option>
            <option>Upcoming</option>
            <option>Completed</option>
          </select>
        </div>

        {/* Other input fields */}

        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Address: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            onChange={(event) =>
              setAdminCreateProjectData({
                ...adminCreateProjectData,
                address: event.target.value,
              })
            }
            type="text"
            required
            value={adminCreateProjectData.address || ""}
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Facebook: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            onChange={(event) =>
              setAdminCreateProjectData({
                ...adminCreateProjectData,
                architectName: event.target.value,
              })
            }
            type="text"
            required
            value={adminCreateProjectData.architectName || ""}
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Head Office: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            onChange={(event) =>
              setAdminCreateProjectData({
                ...adminCreateProjectData,
                landArea: event.target.value,
              })
            }
            value={adminCreateProjectData.landArea || ""}
            required
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Corporate Office: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            onChange={(event) =>
              setAdminCreateProjectData({
                ...adminCreateProjectData,
                facing: event.target.value,
              })
            }
            required
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">website: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            onChange={(event) =>
              setAdminCreateProjectData({
                ...adminCreateProjectData,
                frontRoad: event.target.value,
              })
            }
            value={adminCreateProjectData.frontRoad || ""}
            type="text"
            required
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Size Of Units: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            onChange={(event) =>
              setAdminCreateProjectData({
                ...adminCreateProjectData,
                sizeOfUnits: event.target.value,
              })
            }
            value={adminCreateProjectData.sizeOfUnits || ""}
            required
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Number Of Car Parking: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            onChange={(event) =>
              setAdminCreateProjectData({
                ...adminCreateProjectData,
                numberOfCarParking: event.target.value,
              })
            }
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Land Scaping Consultant: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            onChange={(event) =>
              setAdminCreateProjectData({
                ...adminCreateProjectData,
                landScapingConsultant: event.target.value,
              })
            }
            value={adminCreateProjectData.landScapingConsultant || ""}
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Load Orientation: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            onChange={(event) =>
              setAdminCreateProjectData({
                ...adminCreateProjectData,
                loadOrientation: event.target.value,
              })
            }
            value={adminCreateProjectData.loadOrientation || ""}
            required
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Specialty Of The Land: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            onChange={(event) =>
              setAdminCreateProjectData({
                ...adminCreateProjectData,
                specialtyOfTheLand: event.target.value,
              })
            }
            value={adminCreateProjectData.specialtyOfTheLand || ""}
            required
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Number Of Apartments: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            onChange={(event) =>
              setAdminCreateProjectData({
                ...adminCreateProjectData,
                numberOfApartments: event.target.value,
              })
            }
            value={adminCreateProjectData.numberOfApartments || ""}
            required
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Number Of Basements: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            onChange={(event) =>
              setAdminCreateProjectData({
                ...adminCreateProjectData,
                numberOfBasements: event.target.value,
              })
            }
            value={adminCreateProjectData.numberOfBasements || ""}
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Rajuk Approval No: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            onChange={(event) =>
              setAdminCreateProjectData({
                ...adminCreateProjectData,
                rajukApprovalNo: event.target.value,
              })
            }
            value={adminCreateProjectData.rajukApprovalNo || ""}
            type="text"
          />
        </div>

        {/* Add other fields here (for brevity, omitted in this example) */}

        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Project Cover Photo: </p>
          <img loading="lazy" className="w-40 h-40" src={selectedImage} alt="Preview" />
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            ref={fileInputRef}
            onChange={handleImageChange}
            type="file"
            required
          />
        </div>

        <div className="flex gap-2 mt-5 items-center">
          <input
            className="btn btn-outline hover:bg-[#8E8A20] hover:border-none border border-gray-500 p-2 w-40 rounded"
            type="submit"
            value="Create New Project"
          />
        </div>
      </form>
    </div>
  );
};

export default AdminCreateProjectData;
