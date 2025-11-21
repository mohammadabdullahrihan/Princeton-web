import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const useFeatureProjectsSingleFullData = () => {
  const [featureProjectSingleFullDetails, setFeatureProjectSingleFullDetails] =
    useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {featureProjectId} = useParams();

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get(
          `https://chuti-harmony-server.vercel.app/api/v1/project-details/project-details/${featureProjectId}`
        );
        if (response.data) {
          setFeatureProjectSingleFullDetails(response.data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchedData();
  }, [featureProjectId]);
  return [featureProjectSingleFullDetails, isLoading];
};

export default useFeatureProjectsSingleFullData;
