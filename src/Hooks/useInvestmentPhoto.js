import axios from "axios";
import { useEffect, useState } from "react";

const useInvestmentPhoto = () => {
  const [investmentBenefitPhotos, setInvestmentPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get(
          `https://chuti-harmony-server.vercel.app/api/v1/investment-photo/investment-photo`
        );
        const data = response.data.data;
        setInvestmentPhotos(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, [investmentBenefitPhotos]);
  return [investmentBenefitPhotos, isLoading];
};

export default useInvestmentPhoto;
