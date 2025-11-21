import axios from "axios";
import { useEffect, useState } from "react";

const useOurStoryData = () => {
  const [ourStory, setOurStory] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://chuti-harmony-server.vercel.app/api/v1/our-story/our-story"
        );
        const data = response.data.data;
        // console.log(data);
        setOurStory(data);
      } catch (error) {
        // console.log(error);
        setError(error);
      }
    };
    fetchData();
  }, []);
  return [ourStory, error];
};

export default useOurStoryData;
