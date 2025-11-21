import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurClient from "./OurClient";
import { DarkModeContext } from "../../../../Contexts/NightLightContext";

const OurClients = () => {
  const [ourClients, setOurClients] = useState([]);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await fetch("clients.json");
        const data = await response.json();
        setOurClients(data);
        console.log(data);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchedData();
  }, []);

  // Slider settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Enable infinite looping
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 8, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    initialSlide: 0, // Initial slide index
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval in milliseconds
    arrows: true, // Show navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:p-10 lg:-mt-0 -mt-[30rem] mb-[850px]">
      <div className="place-items-center">
        <h1 className={`text-6xl font-sans lg:my-20 ${darkMode ? 'text-white' : 'text-black'}`}>Our Clients</h1>
      </div>
      <div>
        <Slider {...settings}>
          {ourClients.map((ourClient) => (
            <div key={ourClient._id}>
              <OurClient ourClient={ourClient} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurClients;
