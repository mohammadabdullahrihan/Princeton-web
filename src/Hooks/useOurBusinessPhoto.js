import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useOurBusinessPhoto = () => {
  const [ourBusinessPhotos, setOurBusinessPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://chuti-harmony-server.vercel.app/api/v1/our-business-photos/our-business-photos`
        );
        setOurBusinessPhotos(data.data);
        // console.log(ourBusinessPhotos);
      } catch (error) {
        setError(error);
        toast.error("Failed to fetch business photos!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [ourBusinessPhotos]);

  return [ourBusinessPhotos, isLoading, error];
};

export default useOurBusinessPhoto;
