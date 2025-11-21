import axios from "axios";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import useLifeAtChutiData from "../../../Hooks/useLifeAtChutiData";
import Loading from "../../../Shared/Loading/Loading";

const AdminLifeAtChuti2 = () => {
  const [whyChutiData, error, loading] = useLifeAtChutiData();
  console.log(whyChutiData);
  const [lifeAtChutiData, setLifeAtChutiData] = useState({
    coverPhoto: "",
    descriptionAboutChutiTeam: "",
  });

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const inputImageFileRef = useRef(null);

  useEffect(() => {
    if (whyChutiData) {
      setLifeAtChutiData({
        coverPhoto: whyChutiData.coverPhoto || "",
        descriptionAboutChutiTeam: whyChutiData.descriptionAboutChutiTeam || "",
      });
    }
  }, [whyChutiData]);

  const handleCoverPhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPhoto(URL.createObjectURL(file));
    }
  };

  const uploadImagetoImgBB = async (file) => {
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
      console.log(error);
      toast.error(error);
      return null;
    }
  };

  const handleUpdateDataIntoDB = async (event) => {
    event.preventDefault();

    const updatedDescriptionChutiTeam =
      event.target.updatedWhyChutiDescription.value;

    try {
      let imageUrl = lifeAtChutiData.coverPhoto;
      if (inputImageFileRef.current?.files[0]) {
        const file = inputImageFileRef.current.files[0];
        imageUrl = await uploadImagetoImgBB(file);
        if (!imageUrl) {
          throw new Error("Image uploaded failed");
        }
      }

      setLifeAtChutiData({
        ...lifeAtChutiData,
        coverPhoto: imageUrl,
      });

      const newChutiData = {
        ...lifeAtChutiData,
        coverPhoto: imageUrl,
        descriptionAboutChutiTeam: updatedDescriptionChutiTeam,
      };

      const response = await axios.post(
        `https://chuti-harmony-server.vercel.app/api/v1/life-at-chuti/life-at-chuti`,
        newChutiData
      );
      if (response.status === 200) {
        toast.success("Team Created Successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  return (
    <div className="font-sans">
      <div>
        <p className="text-3xl font-bold">Gallery</p>
      </div>
      <div className="border border-gray-300 p-5 mt-5">
        <form onSubmit={handleUpdateDataIntoDB}>
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="border-r-2 border-gray-500">
              <p className="text-xl font-bold">Write Your Photo Title Here:</p>
              {loading ? (
                <Loading></Loading>
              ) : (
                <textarea
                  className="mt-5 border border-gray-300 w-96 p-5 mr-2"
                  name="updatedWhyChutiDescription"
                  onChange={(event) =>
                    setLifeAtChutiData({
                      ...lifeAtChutiData,
                      descriptionAboutChutiTeam: event.target.value,
                    })
                  }
                  value={lifeAtChutiData.descriptionAboutChutiTeam}
                />
              )}
              <br />
              <input
                className="mt-5 btn btn-outline hover:bg-[#8E8A20] hover:border-none"
                type="submit"
                value="Add Photo to Chuti Gallery"
              />
            </div>
            <div>
              <p className="mt-5 text-xl font-bold">Cover Photo</p>
              {loading ? (
                <Loading></Loading>
              ) : (
                <img
                  loading="lazy"
                  className="mt-5 w-72"
                  src={whyChutiData.coverPhoto}
                  alt="Cover Photo"
                />
              )}
              <p className="mt-5 font-bold">Update Image</p>
              <img
                loading="lazy"
                className="mt-5 w-40 h-40"
                src={selectedPhoto}
                alt="Preview"
              />
              <input
                ref={inputImageFileRef}
                onChange={handleCoverPhoto}
                className="mt-5"
                type="file"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLifeAtChuti2;
