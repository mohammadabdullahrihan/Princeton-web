import { useEffect, useState } from "react";
// import valuePhoto from "../../../../assets/images/About/Our-story/Values_OVWVTw0.2e16d0ba.fill-602x401-c0 (1).png";
import Value from "./Value";
import useOurStoryData from "../../../../Hooks/useOurStoryData";
import Loading from "../../../../Shared/Loading/Loading";
import AOS from "aos";
import "aos/dist/aos.css";

const Values = () => {
  const [values, setValues] = useState([]);
  const [ourStory] = useOurStoryData();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate an API call with a delay
        setTimeout(async () => {
          const response = await fetch("values.json");
          const data = await response.json();
          setValues(data); // Set the fetched data
          setIsLoading(false); // Set loading to false
        }, 4000); // Simulate a 4-second delay
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Handle error and stop loading
      }
    };

    fetchData();
  }, []);

  if (!ourStory) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
  return (
    <section className="bg-[#212121]">
      <div>
        <h1 className="lg:text-8xl text-white text-center mb-15 pt-10">
          <span className="lg:mr-40">V</span>
          <span className="lg:mr-40">A</span>
          <span className="lg:mr-40">L</span>
          <span className="lg:mr-40">U</span>
          <span className="lg:mr-40">E</span>
          <span>S</span>
        </h1>
      </div>
      <div className="lg:flex w-full">
        <div className="w-full flex-1 h-auto p-20">
          <img  loading="lazy" src={ourStory.valueImage} alt="" />
          <p className="text-white font-semibold mt-4">
            {ourStory.valueDescription}
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="flex-1 text-white mt-20 lg:ml-0 ml-10"
        >
          {isLoading ? (
            <Loading></Loading>
          ) : (
            values.map((value) => <Value key={value._id} value={value}></Value>)
          )}
        </div>
      </div>
    </section>
  );
};

export default Values;
