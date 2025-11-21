import axios from "axios";
import { useEffect, useState } from "react";

const useProjectFullDetails = () => {
  const [ongoingProjectFullDetails, setOngoingProjectFullDetails] = useState(
    []
  );
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchedData = async () => {
      setError(null);
      try {
        const response = await axios.get(
          "https://chuti-harmony-server.vercel.app/api/v1/project-details/project-details"
        );
        const data = response.data.data;
        setOngoingProjectFullDetails(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchedData();
  }, [ongoingProjectFullDetails]);
  return [ongoingProjectFullDetails, error, loading];
};

export default useProjectFullDetails;
