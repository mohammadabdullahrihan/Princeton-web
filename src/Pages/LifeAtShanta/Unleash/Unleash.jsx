import { useContext } from "react";
import { LuArrowRightCircle } from "react-icons/lu";
import { DarkModeContext } from "../../../Contexts/NightLightContext";
import { Link } from "react-router-dom";
import useLifeAtChutiData from "../../../Hooks/useLifeAtChutiData";
import Loading from "../../../Shared/Loading/Loading";

const Unleash = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [whyChutiData, error, loading] = useLifeAtChutiData();
  return (
    <div
      className={`p-20 ${
        darkMode ? "bg-black text-white" : "bg-[#FFFAF4] text-black"
      }`}
    >
      <div>
        <h1 className="lg:text-7xl text-3xl text-center">
          Unleash Your <span className="font-bold">Potential</span> <br /> with{" "}
          <span className="font-bold">Chuti Harmony's</span> Winning Team!
        </h1>
      </div>
      <div className="mt-20">
        {loading ? (
          <Loading></Loading>
        ) : (
          <p className="text-xl text-center">
            {whyChutiData.descriptionAboutChutiTeam}
          </p>
        )}
      </div>
      <div
        className={`${
          darkMode ? "text-white bg-black" : "text-black bg-white"
        } mt-10  `}
      >
        <Link to="/career">
          <button className="btn btn-outline hover:text-[#949938] hover:bg-white uppercase flex items-center text-xl mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <LuArrowRightCircle className="mr-2 " /> Current Opening
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Unleash;
