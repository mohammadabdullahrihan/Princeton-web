import { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../../../../Shared/Loading/Loading";

const AdminConnect = () => {
  const [connectionData, setConnectionData] = useState({
    title1: "",
    description1: "",
    title2: "",
    description2: "",
    hotline: "",
    sales: "",
    email: "",
    address: "",
    image: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://chuti-harmony-server.vercel.app/api/v1/connect/connect"
        );
        const data = response.data.data; // Adjust based on your API's response structure
        setConnectionData(data);
        if (data.image) {
          setSelectedImage(data.image);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch connection data");
      }
    };

    fetchData();
  }, []);

  // Upload image to an external service (like ImgBB)
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

  // Update data
  const handleConnectionUpdate = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      let imageUrl = connectionData.image;
      if (selectedImage && fileInputRef.current?.files[0]) {
        const file = fileInputRef.current.files[0];
        imageUrl = await uploadImageToImgBB(file);
        if (!imageUrl) {
          throw new Error("Image upload failed");
        }
      }

      const updatedData = {
        ...connectionData,
        image: imageUrl,
      };

      const response = await axios.patch(
        "https://chuti-harmony-server.vercel.app/api/v1/connect/connect",
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

  // Handle input changes
  const handleInputChange = (key, value) => {
    setConnectionData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  // Handle image change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-10">
        Admin Contact / Connect
      </h1>
      <form onSubmit={handleConnectionUpdate} className="space-y-4">
        <div>
          <label>Title One</label>
          <input
            type="text"
            className="border border-gray-300 rounded w-full p-2"
            value={isLoading ? <Loading></Loading> : connectionData.title1}
            onChange={(e) => handleInputChange("title1", e.target.value)}
          />
        </div>

        <div>
          <label>Description One</label>
          <input
            type="text"
            className=" border border-gray-300 rounded w-full p-2"
            value={connectionData.description1}
            onChange={(e) => handleInputChange("description1", e.target.value)}
          />
        </div>

        <div>
          <label>Title Two</label>
          <input
            type="text"
            className="border border-gray-300 rounded w-full p-2"
            value={connectionData.title2}
            onChange={(e) => handleInputChange("title2", e.target.value)}
          />
        </div>

        <div>
          <label>Description Two</label>
          <input
            type="text"
            className="border border-gray-300 rounded w-full p-2"
            value={connectionData.description2}
            onChange={(e) => handleInputChange("description2", e.target.value)}
          />
        </div>
        <div>
          <label>Hotline</label>
          <input
            type="text"
            className="border border-gray-300 rounded w-full p-2"
            value={connectionData.hotline}
            onChange={(e) => handleInputChange("hotline", e.target.value)}
          />
        </div>
        <div>
          <label>Sales Phone No</label>
          <input
            type="text"
            className="border border-gray-300 rounded w-full p-2"
            value={connectionData.sales}
            onChange={(e) => handleInputChange("sales", e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            className="border border-gray-300 rounded w-full p-2"
            value={connectionData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            className="border border-gray-300 rounded w-full p-2"
            value={connectionData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
          />
        </div>

        <div>
          <label>Image</label>
          {selectedImage && (
            <img
             loading="lazy"
              src={selectedImage}
              alt="Preview"
              className="w-40 h-40 object-cover mb-4"
            />
          )}
          <input
            type="file"
            ref={fileInputRef}
            className="border border-gray-300 rounded w-full p-2"
            onChange={handleImageChange}
          />
        </div>

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

export default AdminConnect;
