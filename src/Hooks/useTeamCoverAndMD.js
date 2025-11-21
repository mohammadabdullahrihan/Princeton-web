import { useEffect, useState } from "react";
import axios from "axios";

const useTeamCoverAndMD = () => {
  const [ourManagementTeamDatas, setOurManagementTeamDatas] = useState(null); // Default as null for better loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOurTeamData = async () => {
      try {
        const response = await axios.get(
          `https://chuti-harmony-server.vercel.app/api/v1/team-member/team-member`
        );

        if (response.data?.data) {
          setOurManagementTeamDatas(response.data.data); // Directly set the object
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
        setError(error.message);
      }
    };

    fetchOurTeamData();
  }, []);

  return [ourManagementTeamDatas, error];
};

export default useTeamCoverAndMD;
