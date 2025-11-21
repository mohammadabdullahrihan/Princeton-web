import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useSingleNewsEventDetails = () => {
  const [singleNewsEventDetail, setSingleNewsEventDetail] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { newsId } = useParams();

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const loadedData = await axios.get(
          `https://chuti-harmony-server.vercel.app/api/v1/news-events/news-event/${newsId}`
        );
        const data = loadedData.data.data;
        console.log(data);
        setSingleNewsEventDetail(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchedData();
  }, [newsId]);
  return [singleNewsEventDetail, isLoading, error];
};

export default useSingleNewsEventDetails;
