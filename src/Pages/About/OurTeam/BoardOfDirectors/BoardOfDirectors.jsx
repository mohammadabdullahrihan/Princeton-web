import { useState } from "react";

import useTeamCoverAndMD from "../../../../Hooks/useTeamCoverAndMD";
import useTeamData from "../../../../Hooks/useTeamData";
import Loading from "../../../../Shared/Loading/Loading";

const BoardOfDirectors = () => {
  const [ourManagementTeamDatas, error] = useTeamCoverAndMD();

  const [ourTeamDatas] = useTeamData([]);

  const [showBio, setShowBio] = useState({});

  // Show error message if API fails
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Show loading state until data is fetched
  if (!ourManagementTeamDatas) {
    return (
      <div>
       <Loading></Loading>
      </div>
    );
  }

  const handleToggleShowBio = (_id) => {
    setShowBio((prevState) => ({
      ...prevState, [_id] : !prevState[_id]
    }))
  };
  return (
    <section>
      <div className="my-20">
        <h1 className="lg:text-6xl font-bold text-center">Board Of Directors</h1>
      </div>
      <div className="mx-20">
        <div className="lg:flex">
          <div className="flex-1">
            <img  loading="lazy" src={ourManagementTeamDatas.managingDirectorImage} alt="" />
          </div>
          <div className="flex-1 lg:p-40">
            <h3 className="uppercase text-2xl font-bold">
              {ourManagementTeamDatas.managingDirectorName}
            </h3>
            <h4 className="my-4 text-[#918721] text-xl">Managing Director</h4>
            <p>
              {ourManagementTeamDatas.managingDirectorDetails.slice(0, 300)}
            </p>
            <button className="uppercase  mt-5 underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
              Show more
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
          {ourTeamDatas.map((ourTeamData) => (
            <div className="mb-10 flex-1 p-2" key={ourTeamData._id}>
              <img  loading="lazy" className="h-60 w-72" src={ourTeamData.photo} alt="" />
              <h3 className="text-xl font-bold uppercase my-3">
                {ourTeamData.name}
              </h3>
              <h4 className="text-xl uppercase text-[#918721] my-3">
                {ourTeamData.designation}
              </h4>
              {showBio[ourTeamData._id] && <p>{ourTeamData.bio}</p>}
              <button
                className="text-xl uppercase underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
                onClick={() => handleToggleShowBio(ourTeamData._id)}
              >
                {showBio[ourTeamData._id] ? "Hide bio -" : "Show bio +"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardOfDirectors;
