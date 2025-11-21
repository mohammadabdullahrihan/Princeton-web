const OurClient = ({ ourClient }) => {
  const { image, title } = ourClient;
  return (
    <div className={`border border-gray-300 p-5 h-40 rounded-lg bg-white ml-2 flex place-items-center`}>
      <img className="" src={image} alt={ourClient.title} />
      {/* <h2>{title}</h2> */}
    </div>
  );
};

export default OurClient;
