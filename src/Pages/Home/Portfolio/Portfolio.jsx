import { useContext, useEffect, useState } from "react";
import "./Portfolio.css";
import { DarkModeContext } from "../../../Contexts/NightLightContext";
import { MotionAnimate } from "react-motion-animate";
import axios from "axios";

const Portfolio = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [portfolioData, setPortfolioData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        console.log(err);
      }
    };
    fetchPortfolioData();
  }, []);

  return (
    <MotionAnimate
      animation="fadeInUp"
      reset={true}
      distance={200}
      delay={1}
      speed={1}
    >
      <div data-aos="zoom-in">
        {/* For larger devices */}
        <div className="hidden lg:block ml-96 px-36 mt-20">
          <p
            className={`${
              darkMode ? "text-white" : "text-black"
            } font-familyPortfolio`}
          >
            {portfolioData?.description || isLoading}
          </p>
        </div>

        {/* For small and medium devices */}
        <div className="block lg:hidden px-4 sm:px-8 lg:px-16 py-6 mt-10 sm:mt-16 max-w-4xl mx-auto">
          <p
            className={`text-base sm:text-lg md:text-xl lg:text-2xl ${
              darkMode ? "text-white" : "text-black"
            } font-familyPortfolio leading-relaxed text-center`}
          >
            {portfolioData?.description || isLoading}
          </p>
        </div>
      </div>
    </MotionAnimate>
  );
};

export default Portfolio;
