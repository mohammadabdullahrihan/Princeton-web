import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { BsArrowRight } from "react-icons/bs";
import axios from "axios";
import GetInTouch from "./GetInTouch";
import FindUs from "./FindUs";

const Contact = () => {
  const [connectData, setConnectData] = useState("");
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get(
          "https://chuti-harmony-server.vercel.app/api/v1/connect/connect"
        );
        const data = response.data.data;
        setConnectData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  return (
    <section className="p-4 lg:p-8">
      <div className="lg:flex styleForMainDiv">
        <div className="flex-1">
          <div className="mb-10 lg:mb-20 font-familyConnect w-full lg:w-20 uppercase">
            <h1 className="text-4xl lg:text-8xl text-center font-bold">Contact Us</h1>
          </div>
          <div className="font-familyPortfolio">
            <div>
              <div className="flex justify-between">
                <div>
                  <Link
                    to={"/clients"}
                    className="text-[#978C21] text-xl lg:text-2xl mt-2"
                  >
                    {connectData.title1}
                  </Link>
                </div>
                <div className="flex justify-end">
                  <Link to={""}>
                    <BsArrowRight className="text-[#6D6729]" />
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-base lg:text-xl font-thin mb-4 w-full lg:w-[75%]">
                  {connectData.description1}
                </p>
              </div>
              <div className="border-t border-gray-400 w-full my-5"></div>
            </div>
            <div>
              <div>
                <div>
                  <Link
                    to={"/landowners"}
                    className="text-[#978C21] text-xl lg:text-2xl mt-2"
                  >
                    {connectData.title2}
                  </Link>
                </div>
                <div className="flex justify-end">
                  <Link>
                    <BsArrowRight className="text-[#6D6729]" />
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-base lg:text-xl font-thin mb-4 w-full lg:w-[75%]">
                  {connectData.description2}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-0">
          <img
           loading="lazy"
            className="p-5 w-full h-auto lg:h-[475px] lg:w-[650px]"
            src="https://i.ibb.co.com/6BYbr6w/7.jpg"
            alt=""
          />
        </div>
      </div>
      <GetInTouch></GetInTouch>
      <FindUs></FindUs>
    </section>
  );
};

export default Contact;