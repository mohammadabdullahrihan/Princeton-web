import { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AdminOurStory = () => {
  const [storyData, setStoryData] = useState({
    storyBannerImage: "",
    foundationImage: "",
    foundationTitle: "",
    foundationDescriptionFirst: "",
    foundationDescriptionSecond: "",
    foundationDescriptionReadMore: "",
    whoWeAreFirstDescription: "",
    whoWeAreSecondDescription: "",
    logoImage: "",
    logoDescriptionFirst: "",
    logoDescriptionSecond: "",
    logoDescriptionThird: "",
    visionTitle: "",
    visionImage: "",
    missionTitle: "",
    misssionImage: "",
    valueImage: "",
    valueDescription: "",
  });

  const [imagePreviews, setImagePreviews] = useState({}); // State for image previews
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRefs = useRef({}); // Dynamic refs for each image field

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://chuti-harmony-server.vercel.app/api/v1/our-story/our-story"
        );
        const data = response.data.data;
        setStoryData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch connection data");
      }
    };

    fetchData();
  }, []);

  const uploadImageToImgBB = async (file) => {
    if (!file) {
      toast.error("No file selected for upload");
      return null;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=9f989d9dc9f26cdee1f0e39188190099`,
        formData
      );
      return response.data.data.url; // Return the direct URL
    } catch (error) {
      console.error("Image upload error:", error);
      toast.error("Image upload failed");
      return null;
    }
  };

  const handleOurStoryUpdate = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const updatedData = { ...storyData };

      const keysToUpload = [
        "storyBannerImage",
        "foundationImage",
        "logoImage",
        "visionImage",
        "misssionImage",
        "valueImage",
      ];

      for (const key of keysToUpload) {
        const file = fileInputRefs.current[key]?.files[0];
        if (file) {
          const imageUrl = await uploadImageToImgBB(file);
          if (imageUrl) {
            updatedData[key] = imageUrl;
          } else {
            throw new Error(`Failed to upload ${key}`);
          }
        }
      }

      const response = await axios.patch(
        "https://chuti-harmony-server.vercel.app/api/v1/our-story/our-story",
        updatedData
      );

      if (response.status === 200) {
        toast.success("Updated connection data successfully!");
      }
    } catch (error) {
      console.error("Error updating data:", error);
      toast.error("Failed to update connection data");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (key, value) => {
    setStoryData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleFileChange = (key, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviews((prevState) => ({
        ...prevState,
        [key]: reader.result, // Set the preview URL
      }));
    };
    if (file) {
      reader.readAsDataURL(file); // Generate the base64 preview
    }
  };

  const setFileInputRef = (key, ref) => {
    if (ref) {
      fileInputRefs.current[key] = ref;
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-10">Our Story</h1>
      <form
        onSubmit={handleOurStoryUpdate}
        className="space-y-4 space-x-5 grid lg:grid-cols-2 justify-around"
      >
        {Object.keys(storyData)
          .filter((key) => key !== "_id" && key !== "__v")
          .map((key) => {
            if (key.endsWith("Image")) {
              return (
                <div key={key} className="border border-gray-500 px-5 rounded">
                  <label>{key}</label>
                  {imagePreviews[key] ? (
                    <img
                     loading="lazy"
                      src={imagePreviews[key]}
                      alt="Preview"
                      className="w-40 h-40 object-cover mb-4"
                    />
                  ) : storyData[key] ? (
                    <img
                     loading="lazy"
                      src={storyData[key]}
                      alt="Preview"
                      className="w-40 h-40 object-cover mb-4"
                    />
                  ) : null}
                  <input
                    type="file"
                    ref={(ref) => setFileInputRef(key, ref)}
                    onChange={(e) => handleFileChange(key, e.target.files[0])}
                    className="border border-gray-300 rounded w-full p-2"
                  />
                </div>
              );
            } else {
              return (
                <div key={key} className="border border-gray-700 px-5 rounded">
                  <label>{key}</label>
                  <textarea
                    type="text"
                    className="border h-40 border-gray-300 rounded w-full p-2 textarea textarea-bordered textarea-lg  max-w-xs"
                    value={storyData[key]}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                  />
                </div>
              );
            }
          })}

        <button
          type="submit"
          className={`btn btn-primary ${isLoading ? "opacity-50" : ""}`}
          disabled={isLoading}
        >
          {isLoading ? "Updating..." : "Update"}
        </button>
      </form>
    </div>
  );
};

export default AdminOurStory;
