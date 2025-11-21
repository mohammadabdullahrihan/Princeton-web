import axios from "axios";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const AdminCommitments = () => {
  const [achievements, setAchievements] = useState({
    image: "",
    totalAreaInputOne: "",
    totalAreaInputTwo: "",
    totalAreaInputThree: "",
    activeYearsInputOne: "",
    activeYearsInputTwo: "",
    activeYearsInputThree: "",
    completedProjectsInputOne: "",
    completedProjectsInputTwo: "",
    completedProjectsInputThree: "",
    numberOfProjectsInputOne: "",
    numberOfProjectsInputTwo: "",
    numberOfProjectsInputThree: "",
    clientsInputOne: "",
    clientsInputTwo: "",
    clientsInputThree: "",
    OtherThingsInputOne: "",
    OtherThingsInputTwo: "",
    OtherThingsInputThree: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://chuti-harmony-server.vercel.app/api/v1/withness/withness"
        );
        const data = response.data.data;
        setAchievements(data);
        if (data.image) {
          setSelectedImage(data.image);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

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
      return response.data.data.url;
    } catch (error) {
      console.error("Image upload error:", error);
      toast.error("Image upload failed");
      return null;
    }
  };

  const handleInputChange = (key, value) => {
    setAchievements((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleUpdateFeatureProject = async (event) => {
    event.preventDefault();

    try {
      let imageUrl = achievements.image;
      if (selectedImage && fileInputRef.current?.files[0]) {
        const file = fileInputRef.current.files[0];
        imageUrl = await uploadImageToImgBB(file);
        if (!imageUrl) {
          throw new Error("Image upload failed");
        }
      }

      const updatedProject = {
        ...achievements,
        image: imageUrl,
      };

      const response = await axios.patch(
        "https://chuti-harmony-server.vercel.app/api/v1/withness/withness",
        updatedProject
      );

      if (response.status === 200) {
        toast.success("Project updated successfully!");
      }
    } catch (error) {
      console.error("Error updating project:", error);
      toast.error("Failed to update the project");
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center mb-10">
          Our Achievements
        </h1>
      </div>
      <div className="border border-gray-700 p-5">
        <form onSubmit={handleUpdateFeatureProject}>
          <h3 className="mb-5">Image of your project</h3>
          {selectedImage && (
            <img
             loading="lazy"
              className="w-[200px] h-2/4 mb-3"
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

          <p className="my-5 font-bold">Photo Size Must Be: 512 (px) x  </p>

          {/* Render Each Input Field */}
          <h3>Total Area Input One</h3>
          <input
            onChange={(e) =>
              handleInputChange("totalAreaInputOne", e.target.value)
            }
            className="border border-black rounded w-60 h-10 p-2 mb-5 mt-3"
            type="text"
            placeholder="Total Area Input One"
            value={achievements.totalAreaInputOne}
          />

          <h3>Total Area Input Two</h3>
          <input
            onChange={(e) =>
              handleInputChange("totalAreaInputTwo", e.target.value)
            }
            className="border border-black rounded w-60 h-10 p-2 mb-5 mt-3"
            type="text"
            placeholder="Total Area Input Two"
            value={achievements.totalAreaInputTwo}
          />

          <h3>Total Area Input Three</h3>
          <input
            onChange={(e) =>
              handleInputChange("totalAreaInputThree", e.target.value)
            }
            className="border border-black rounded w-60 h-10 p-2 mb-5 mt-3"
            type="text"
            placeholder="Total Area Input Three"
            value={achievements.totalAreaInputThree}
          />

          {/* Render All Remaining Input Fields Explicitly */}
          {Object.keys(achievements)
            .filter(
              (key) =>
                ![
                  "_id",
                  "__v",
                  "image",
                  "totalAreaInputOne",
                  "totalAreaInputTwo",
                  "totalAreaInputThree",
                ].includes(key)
            )
            .map((key) => (
              <div key={key}>
                <h3>{key.replace(/([A-Z])/g, " $1")}</h3>
                <input
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  className="border border-black rounded w-60 h-10 p-2 mb-5 mt-3"
                  type="text"
                  placeholder={key.replace(/([A-Z])/g, " $1")}
                  value={achievements[key]}
                />
              </div>
            ))}

          <br />
          <input
            value={"Update Commitment"}
            type="submit"
            className="btn btn-wide btn-warning"
          />
        </form>
      </div>
    </div>
  );
};

export default AdminCommitments;
