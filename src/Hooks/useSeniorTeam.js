import axios from "axios";
import { useEffect, useState } from "react";

const useSeniorTeam = () => {
  const [ourSeniorTeams, setOurSeniorTeams] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOurSeniorTeam = async () => {
      try {
        const response = await axios.get(
          "https://chuti-harmony-server.vercel.app/api/v1/senior-team/senior-team"
        );

        // Assuming the API returns data in a format like { data: [...] }
        if (response.data?.data && Array.isArray(response.data.data)) {
          setOurSeniorTeams(response.data.data);
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOurSeniorTeam();
  }, []);

  return [ourSeniorTeams, setOurSeniorTeams, error, loading];
};

export default useSeniorTeam;
