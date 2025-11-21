import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "../../../../Shared/Loading/Loading";

const AdminPortfolio = () => {
  const [portfolioData, setPortfolioData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const notify = () => toast("update portfolio Successfully");

  const handlePortfolioUpdate = async (event) => {
    event.preventDefault();

    const updateDescription = event.target.updatePortfolio.value;

    try {
      const response = await axios.patch(
        "https://chuti-harmony-server.vercel.app/api/v1/portfolio/update-portfolio",
        {
          description: updateDescription,
        }
      );

      setPortfolioData(response.data);
      notify();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await axios.get(
          "https://chuti-harmony-server.vercel.app/api/v1/portfolio"
        );
        if (response.data && response.data.data && response.data.data[0]) {
          setPortfolioData(response.data.data[0]);
        }
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchPortfolioData();
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
    // return <p className="text-center text-lg">Loading portfolio....</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div>
      <p className="text-2xl my-5 mb-10">Write in your portfolio</p>
      <form onSubmit={handlePortfolioUpdate}>
        <textarea
          onChange={(e) =>
            setPortfolioData({ ...portfolioData, description: e.target.value })
          }
          placeholder={portfolioData?.description || "...Loading"}
          name="updatePortfolio"
          value={portfolioData.description}
          className="textarea textarea-bordered textarea-lg lg:w-[50rem] h-52"
        ></textarea>
        <input
          type="submit"
          className="btn btn-wide btn-error mt-2 text-white"
          value={"Update"}
        />
      </form>
    </div>
  );
};

export default AdminPortfolio;
