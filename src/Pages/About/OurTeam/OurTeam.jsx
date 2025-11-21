import BoardOfDirectors from "./BoardOfDirectors/BoardOfDirectors";
import SeniorManagement from "./SeniorManagement/SeniorManagement";
import TeamStandards from "./TeamStandards/TeamStandards";
import TheTeam from "./TheTeam/TheTeam";

const OurTeam = () => {
    return (
        <div>
            <TeamStandards></TeamStandards>
            <BoardOfDirectors></BoardOfDirectors>
            <SeniorManagement></SeniorManagement>
            <TheTeam></TheTeam>
        </div>
    );
};

export default OurTeam;