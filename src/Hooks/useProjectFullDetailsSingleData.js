import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useProjectFullDetailsSingleData = () => {
  const [projectFullDetails, setProjectFullDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const { projectId } = useParams();

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get(
          `https://chuti-harmony-server.vercel.app/api/v1/project-details/project-details/${projectId}`
        );
        const data = response.data.data;
        setProjectFullDetails(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchedData();
  }, [projectId]);
  return [projectFullDetails, loading];
};

export default useProjectFullDetailsSingleData;
