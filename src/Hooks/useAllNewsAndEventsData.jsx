import axios from "axios";
import { useEffect, useState } from "react";

const useAllNewsAndEventsData = () => {
  const [allNewsAndEvents, setAllNewsAndEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get(
          `https://chuti-harmony-server.vercel.app/api/v1/news-events/news-event`
        );
        const data = response.data.data;
        console.log(data);
        setAllNewsAndEvents(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, [allNewsAndEvents]);
  return [allNewsAndEvents, isLoading];
};

export default useAllNewsAndEventsData;
