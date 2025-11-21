import { useEffect, useState } from "react";
import OurBusinessDetail from "./OurBusinessDetail";

const OurBusinessDetails = () => {
  const [businessDetails, setBusinessDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusinessDetails = async () => {
      try {
        const response = await fetch(
          "https://chuti-harmony-server.vercel.app/api/v1/our-business/our-business"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch business details");
        }
        const data = await response.json();
        console.log(data.data);
        setBusinessDetails(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBusinessDetails();
  }, []);

  return (
    <div className="p-10">
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : businessDetails.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessDetails.map((businessDetail) => (
            <OurBusinessDetail
              key={businessDetail._id}
              businessDetail={businessDetail}
            />
          ))}
        </div>
      ) : (
        <p className="text-center">No business details found.</p>
      )}
    </div>
  );
};

export default OurBusinessDetails;

