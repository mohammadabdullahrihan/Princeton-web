import { useState } from "react";
import Swal from "sweetalert2";

const WhyShantaCard = ({ cardDetail }) => {
  const { id, name, img, details } = cardDetail;
  const [isHovered, setIsHovered] = useState(false);

  // Fetch individual data from the JSON file
  const fetchIndividualData = async (id) => {
    try {
      // Fetch the entire JSON file
      const response = await fetch("/whyChuti.json");
      const data = await response.json();

      // Find the individual data by ID
      const individualData = data.find((item) => item.id === id);
      return individualData;
    } catch (error) {
      console.error("Error fetching data:", error);
      Swal.fire({
        title: "Oops...",
        text: "Something went wrong while fetching the details!",
      });
      return null;
    }
  };

  // Handle more details
  const handleMoreDetails = async (id) => {
    const individualData = await fetchIndividualData(id);

    if (individualData) {
      Swal.fire({
        title: individualData.name,
        html: `
          <h3 style="font-weight: bold;">${individualData.serviceOne}</h3>
          <p>${individualData.details}</p>
          <h3 style="font-weight: bold;">${individualData.serviceTwo}</h3>
          <p>${individualData.serviceTwoDescription}</p>
          <img src="${individualData.img}" alt="${individualData.name}" style="width:100%; max-width:300px; margin-top:20px;">
        `,
        showCloseButton: true,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        title: "Oops...",
        text: "No details found for this item!",
      });
    }
  };

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-10">
        <img  loading="lazy" className="h-60" src={img} alt="" />
      </div>
      <div className="-mt-[136px] opacity-75 absolute bg-black lg:w-[364px] w-[165px] h-24">
        <h3 className="mt-5 text-white text-center font-bold">{name}</h3>
      </div>
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 flex flex-col justify-center items-center transition-all duration-300">
          <h1 className="text-white text-2xl font-bold">{name}</h1>
          <p className="text-white mt-4">{details}</p>
          <button
            onClick={() => handleMoreDetails(id)}
            className="btn btn-outline mt-5 bg-white hover:bg-[#8F8933]"
          >
            More Details
          </button>
        </div>
      )}
    </div>
  );
};

export default WhyShantaCard;