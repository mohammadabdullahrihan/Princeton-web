const OurBusinessSinglePhoto = ({ ourBusinessPhoto }) => {
  const { name, image } = ourBusinessPhoto;

  return (
    <div className="">
      <img  loading="lazy" src={image} alt="Business Photo" className="w-full h-full" />
    </div>
  );
};

export default OurBusinessSinglePhoto;
