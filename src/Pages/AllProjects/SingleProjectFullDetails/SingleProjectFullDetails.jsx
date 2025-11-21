import { useEffect } from "react";
import useProjectFullDetailsSingleData from "../../../Hooks/useProjectFullDetailsSingleData";
import GetInTouch from "../../Contact/GetInTouch";
import SingleProjectDetails from "./SingleProjectDetail/SingleProjectDetails";
import SingleProjetFullDetailsCover from "./SingleProjectFullDetailsCover/SingleProjetFullDetailsCover";

const SingleProjectFullDetails = () => {
  const [projectFullDetails] = useProjectFullDetailsSingleData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SingleProjetFullDetailsCover></SingleProjetFullDetailsCover>
      <SingleProjectDetails></SingleProjectDetails>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default SingleProjectFullDetails;
