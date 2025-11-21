import { useEffect, useState } from "react";

const useTeamData = () => {
  const [ourTeamDatas, setOurTeamDatas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOurTeamTwo = async () => {
      try {
        const response = await fetch(
          `https://chuti-harmony-server.vercel.app/api/v1/team-two/team-two`
        );
        const data = await response.json();

        if (Array.isArray(data)) {
          setOurTeamDatas(data);
        } else if (data?.data && Array.isArray(data.data)) {
          setOurTeamDatas(data.data);
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };
    fetchOurTeamTwo();
  }, []);
  return [ourTeamDatas, setOurTeamDatas, error];
};

export default useTeamData;
