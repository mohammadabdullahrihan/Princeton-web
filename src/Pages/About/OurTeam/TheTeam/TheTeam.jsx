import useTeamCoverAndMD from "../../../../Hooks/useTeamCoverAndMD";
import Loading from "../../../../Shared/Loading/Loading";

const TheTeam = () => {
  const [ourManagementTeamDatas] = useTeamCoverAndMD();
  console.log(ourManagementTeamDatas);

  if (!ourManagementTeamDatas) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  return (
    <section>
      <div className="my-20">
        <h1 className="text-6xl text-center">The Team</h1>
      </div>
      <div>
        <img  loading="lazy" className="lg:w-[1920px]" src={ourManagementTeamDatas.fullTeamImage} alt="" />
      </div>
      <div className="lg:flex text-xl bg-[#5C5151] ">
        <p className="flex-1 mx-10 p-20">
          {ourManagementTeamDatas.fullTeamDescriptionOne}
        </p>
        <p className="flex-1 mx-10 p-20">
          {ourManagementTeamDatas.fullTeamDescriptionTwo}
        </p>
      </div>
    </section>
  );
};

export default TheTeam;
