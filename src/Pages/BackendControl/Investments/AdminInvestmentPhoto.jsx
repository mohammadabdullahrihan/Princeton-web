import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import useInvestmentPhoto from "../../../Hooks/useInvestmentPhoto";
import Swal from "sweetalert2";

const AdminInvestmentPhoto = () => {
  const [photos, setPhotos] = useState([]); // Store selected photos
  const [previewUrls, setPreviewUrls] = useState([]); // Store preview URLs
  const [photoName, setPhotoName] = useState(""); // Store photo name
  const [message, setMessage] = useState(""); // Display status messages

  // investment photo load from database
  const [investmentBenefitPhotos, isLoading] = useInvestmentPhoto();

  // Handle file selection and generate preview
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setPhotos(files);

    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(previewUrls);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    if (!photoName.trim()) {
      toast.error("Please enter a photo name");
      setMessage("Photo name is required");
      return;
    }

    if (photos.length === 0) {
      toast.error("Please select photos to upload");
      setMessage("Please select photos to upload");
      return;
    }

    try {
      setMessage("Uploading photos...");
      toast.loading("Uploading photos...");

      for (const photo of photos) {
        const formData = new FormData();
        formData.append("image", photo);

        // Upload to imgbb
        const imgbbResponse = await axios.post(
          `https://api.imgbb.com/1/upload?key=9f989d9dc9f26cdee1f0e39188190099`,
          formData
        );

        if (imgbbResponse.data?.data?.url) {
          const photoUrl = imgbbResponse.data.data.url; // Get photo URL
          await saveToDatabase(photoUrl); // Save photo URL to the database
        } else {
          toast.error("Failed to upload photo to imgbb");
        }
      }

      setMessage("Photos uploaded successfully");
      toast.dismiss();
      toast.success("Photos uploaded successfully");
    } catch (error) {
      console.error("Error uploading photos:", error);
      setMessage("Failed to upload photos. Please try again.");
      toast.error("Failed to upload photos.");
    }
  };

  // Save photo URL to the server database
  const saveToDatabase = async (photoUrl) => {
    try {
      await axios.post(
        "https://chuti-harmony-server.vercel.app/api/v1/investment-photo/investment-photo",
        {
          name: photoName, // Correctly aligned with backend schema
          investmentImage: photoUrl,
        }
      );
      toast.success("Photo saved to the database");
    } catch (error) {
      console.error("Error saving photo to the database:", error);
      toast.error("Failed to save photo to the database");
    }
  };

  const handleInvestmentPhotoDelete = async (investmentPhotoId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        // Make the API call to delete the project
        const response = await axios.delete(
          `https://chuti-harmony-server.vercel.app/api/v1/investment-photo/investment-photo/${investmentPhotoId}`
        );

        if (response.status === 200) {
          Swal.fire({
            title: "Deleted!",
            text: "The project has been deleted successfully.",
            icon: "success",
          });
          toast.success("Project Deleted Successfully");
        } else {
          toast.error("Something went wrong");
        }
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete project. Please try again.");
    }
  };

  return (
    <div className="border border-gray-400 p-5 mb-10 rounded">
      <p className="font-bold mb-5">Upload Investment Photos</p>

      <form onSubmit={handleSubmit}>
        {/* Photo Name Input */}
        <input
          type="text"
          placeholder="Photo Name"
          value={photoName}
          onChange={(e) => setPhotoName(e.target.value)}
          className="mb-5 border border-gray-600 p-2 w-2/6"
        />
        <br />

        {previewUrls.length > 0 && (
          <div>
            <p>Image previews:</p>
            <div className="grid grid-cols-4 gap-4">
              {previewUrls.map((url, index) => (
                <img
                 loading="lazy"
                  key={index}
                  src={url}
                  alt={`Selected ${index}`}
                  className="w-60 h-60 my-5"
                />
              ))}
            </div>
          </div>
        )}

        {/* File Upload Input */}
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="mb-3"
        />
        <br />

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary mt-5 text-white bg-[#8E8A20] hover:bg-[#8d8a31] border-none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Add Photos
        </button>
      </form>

      <p className="border-b-4 border-black">Your Photos</p>
      <div className="grid grid-cols-4 mt-5">
        {investmentBenefitPhotos.map((investmentBenefitPhoto) => (
          <div className="" key={investmentBenefitPhoto._id}>
            <img
             loading="lazy"
              className="w-40 h-40"
              src={investmentBenefitPhoto.investmentImage}
              alt=""
            />
            <button
              onClick={() =>
                handleInvestmentPhotoDelete(investmentBenefitPhoto._id)
              }
              className="btn btn-error text-white mt-2"
            >
              Delet Photo
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminInvestmentPhoto;
