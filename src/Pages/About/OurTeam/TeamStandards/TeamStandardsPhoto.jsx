import useTeamCoverAndMD from "../../../../Hooks/useTeamCoverAndMD";
import Loading from "../../../../Shared/Loading/Loading";

const TeamStandardsPhoto = () => {
  const [ourManagementTeamDatas, , error] = useTeamCoverAndMD();

  // Display error message if fetching fails
  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  // Show a loading message until data is fetched
  if (!ourManagementTeamDatas) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div>
      {/* Ensure teamCoverPhoto exists */}
      <img
        loading="lazy"
        src={ourManagementTeamDatas.teamCoverPhoto}
        alt="Team Cover"
        className="w-full h-auto"
      />
    </div>
  );
};

export default TeamStandardsPhoto;
