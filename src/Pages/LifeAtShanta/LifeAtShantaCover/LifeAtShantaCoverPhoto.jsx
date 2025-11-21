const LifeAtShantaCoverPhoto = ({ whyChutiData }) => {
  const { coverPhoto, descriptionAboutChutiTeam } = whyChutiData;
  return (
    <div className="border border-gray-400 p-2 rounded shadow-2xl">
      <img loading="lazy" src={coverPhoto} alt="" />
      <h1 className="text-center font-sans">{descriptionAboutChutiTeam}</h1>
    </div>
  );
};

export default LifeAtShantaCoverPhoto;
