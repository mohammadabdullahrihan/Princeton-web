import { useState } from "react";

const OurBusinessDetail = ({ businessDetail }) => {
  const { name, photo, titleOne, titleTwo, titleThree, titleFour } =
    businessDetail || {};
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative shadow-lg rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4">
        <div>
          <img  loading="lazy"
            src={photo || "https://via.placeholder.com/400"}
            alt={name || "Business"}
            className="w-full h-[250px] object-cover"
          />
        </div>
        {!isHovered && (
          <div className="-mt-[90px] opacity-75 absolute bg-black w-full h-24 flex items-center justify-center ">
            <h3 className="text-white font-bold text-center">{name}</h3>
          </div>
        )}
      </div>
      {isHovered && (
        <div className="text-white underline mt-10">
          <div className="relative">
            <p className="">{titleOne}</p>
            <div className="-mt-[260px] opacity-75 absolute bg-black w-full justify-center">
              <h3 className="text-white font-bold text-center hover:text-[#8F8933] mt-5  cursor-pointer">
                {titleOne}
              </h3>
              <h3 className="text-white font-bold text-center hover:text-[#8F8933] mt-5  cursor-pointer">
                {titleTwo}
              </h3>
              <h3 className="text-white font-bold text-center hover:text-[#8F8933] mt-5  cursor-pointer">
                {titleThree}
              </h3>
              <h3 className="text-white font-bold text-center hover:text-[#8F8933] mt-5  cursor-pointer">
                {titleFour}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurBusinessDetail;
