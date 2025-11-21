import { useState, useRef, useEffect } from "react";
import axios from "axios";

const HomePagePopUp = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [popUpData, setPopUpData] = useState({
    image: "",
    url: "",
  });
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  // Fetch pop-up data on component mount
  useEffect(() => {
    const fetchPopUp = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await axios.get(
          "https://chuti-harmony-server.vercel.app/api/v1/pop-up/pop-up"
        );

        // The backend returns an array of popups, we take the first one
        const popupArray = response.data.data;

        if (popupArray && popupArray.length > 0) {
          const latestPopup = popupArray[0];
          setPopUpData({
            image: latestPopup.image || "",
            url: latestPopup.url || "",
          });
        } else {
          setError("No pop-up data found");
        }
      } catch (err) {
        console.error("Error fetching pop-up:", err);
        setError("Failed to fetch pop-up data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPopUp();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be smaller than 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => setPreviewImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleUrlChange = (e) => {
    setPopUpData({ ...popUpData, url: e.target.value });
  };

  const handleSubmit = async () => {
    setIsUploading(true);
    setError(null);

    try {
      let imageUrl = popUpData.image;

      if (previewImage) {
        const blob = await fetch(previewImage).then((r) => r.blob());
        const formData = new FormData();
        formData.append("image", blob);

        const imgbbRes = await axios.post(
          "https://api.imgbb.com/1/upload?key=9f989d9dc9f26cdee1f0e39188190099",
          formData
        );

        imageUrl = imgbbRes.data.data.url;
      }

      const updateRes = await axios.patch(
        "https://chuti-harmony-server.vercel.app/api/v1/pop-up/pop-up",
        {
          image: imageUrl,
          url: popUpData.url,
        }
      );

      const updatedPopup = updateRes.data.data;

      if (updateRes.data.success && updatedPopup) {
        setPopUpData({
          image: updatedPopup.image || imageUrl,
          url: updatedPopup.url || popUpData.url,
        });

        setPreviewImage(null);
        if (fileInputRef.current) fileInputRef.current.value = "";

        alert("Pop-up updated successfully!");
      } else {
        throw new Error("Update failed");
      }
    } catch (err) {
      console.error("Error updating popup:", err);
      setError("Failed to update pop-up. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section className="p-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 underline mb-6">
        Pop-Up Management
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-xl font-semibold text-gray-700 mb-6">
          Update your pop-up
        </p>

        {isLoading ? (
          <p className="text-sm text-gray-500 mb-6">Loading pop-up data...</p>
        ) : error ? (
          <p className="text-sm text-red-500 mb-6">{error}</p>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-3">
                Current Pop-Up Image:
              </p>
              {popUpData.image ? (
                <img
                  src={popUpData.image}
                  alt="Current popup"
                  className="max-w-full md:max-w-md max-h-64 object-contain border rounded-lg shadow-sm"
                  onError={() => setError("Failed to load current image")}
                />
              ) : (
                <p className="text-gray-500">No image available.</p>
              )}
            </div>

            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-3">
                Current Pop-Up URL:
              </p>
              <p className="text-sm text-gray-600 break-all">
                {popUpData.url || "No URL set yet"}
              </p>
            </div>
          </>
        )}

        {previewImage && (
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-3">
              New Image Preview:
            </p>
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-full md:max-w-md max-h-64 object-contain border rounded-lg shadow-sm"
            />
          </div>
        )}

        <div className="flex flex-col space-y-3 mb-6">
          <label className="text-lg font-medium text-gray-700">
            Select new image for pop-up
          </label>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="block w-full text-lg text-gray-700 py-3 px-4 border border-gray-300 rounded-lg file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-lg file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 cursor-pointer"
          />
          <p className="text-sm text-gray-500">
            Select an image file (JPEG, PNG, etc.)
          </p>
        </div>

        <div className="flex flex-col space-y-3 mb-6">
          <label className="text-lg font-medium text-gray-700">
            Pop-Up URL
          </label>
          <input
            type="url"
            value={popUpData.url}
            onChange={handleUrlChange}
            placeholder="Enter URL for the pop-up to link to"
            className="block w-full text-lg text-gray-700 py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="text-sm text-gray-500">
            Enter the URL you want the pop-up to link to
          </p>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => {
              setPreviewImage(null);
              if (fileInputRef.current) fileInputRef.current.value = "";
            }}
            disabled={isUploading}
            className="px-6 py-3 rounded-lg text-white bg-gray-500 hover:bg-gray-600 text-lg font-medium transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isUploading || (!previewImage && !popUpData.url)}
            className={`px-6 py-3 rounded-lg text-white text-lg font-medium ${
              isUploading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } transition-colors duration-200`}
          >
            {isUploading ? "Saving..." : "Save Pop-Up"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePagePopUp;
