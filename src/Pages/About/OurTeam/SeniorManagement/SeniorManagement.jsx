import { useContext, useState } from "react";

import useTeamCoverAndMD from "../../../../Hooks/useTeamCoverAndMD";
import useSeniorTeam from "../../../../Hooks/useSeniorTeam";
import { DarkModeContext } from "../../../../Contexts/NightLightContext";
import Loading from "../../../../Shared/Loading/Loading";

const SeniorManagement = () => {
  const {darkMode} = useContext(DarkModeContext);
  const [ourManagementTeamDatas, error] = useTeamCoverAndMD();
  const [ourSeniorTeams] = useSeniorTeam();

  const [showBio, setShowBio] = useState(false);
  const [showSeniorTeamBio, setSeniorTeamBio] = useState(false);

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

  const handleShowBio = () => {
    setShowBio(!showBio);
  };

  const handleSetSeniorTeamBio = () => {
    setSeniorTeamBio(!showSeniorTeamBio);
  };
  return (
    <section className={`${darkMode ? "bg-[#5C5151]": "bg-[#ECE5DA]"}`}>
      <div className="my-20">
        <h1 className="text-6xl font-bold text-center">
          Senior management Team
        </h1>
      </div>
      <div className="mx-20">
        <div className="lg:flex ">
          <div className="flex-1 lg:p-40">
            <h3 className="uppercase text-2xl font-bold">
              {ourManagementTeamDatas.ceoName}
            </h3>
            <h4 className="my-4 text-[#918721] text-xl">
              Chief Executive officer
            </h4>
            <p>{ourManagementTeamDatas.ceoAbout.slice(0, 300)}</p>
            {showBio && (
              <p>{ourManagementTeamDatas.ceoAboutMore.slice(0, 300)}</p>
            )}
            <button
              onClick={() => handleShowBio()}
              className="uppercase  mt-5 underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
            >
              {showBio ? "Hide Bio" : "Show more"}
            </button>
          </div>
          <div className="lg:flex-1">
            <img  loading="lazy" className="" src={ourManagementTeamDatas.ceoPhoto} alt="" />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-20">
          {ourSeniorTeams.map((seniorTeam) => (
            <div className="mb-10 flex-1 p-2" key={seniorTeam._id}>
              <img  loading="lazy" className="h-60" src={seniorTeam.photo} alt="" />
              <h3 className="text-xl font-bold uppercase my-3">
                {seniorTeam.name}
              </h3>
              <h4 className="text-xl uppercase text-[#918721] my-3">
                {seniorTeam.designation}
              </h4>
              {showSeniorTeamBio && (
                <p className="text-xl mb-4">{seniorTeam.bio}</p>
              )}
              <button
                onClick={handleSetSeniorTeamBio}
                className="text-xl uppercase underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
              >
                {showSeniorTeamBio ? "Hide Bio -" : "Show bio +"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeniorManagement;
