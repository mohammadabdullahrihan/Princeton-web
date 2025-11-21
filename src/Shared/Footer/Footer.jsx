import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { DarkModeContext } from "../../Contexts/NightLightContext";

const Footer = () => {
  const [contactData, setContactData] = useState("");

  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get(
          "https://chuti-harmony-server.vercel.app/api/v1/connect/connect"
        );
        const data = response.data.data;
        setContactData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  return (
    <footer className={`w-full ${darkMode ? 'bg-[#5F613A]' : 'bg-[#F3EBDD]'} py-10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* First section */}
          <div className="w-full">
            <ul className={`text-lg sm:text-xl md:text-2xl ${darkMode ? 'text-white' : 'text-[#3c3c3b]'}`}>
              <li className="hover:text-[#b6af61] hover:underline cursor-pointer text-[1.1rem] mb-2">
                <span className="flex items-center gap-3 hover:gap-5">
                  Hotline: {contactData.hotline} <BsArrowUpRight />
                </span>
              </li>
              <li className="hover:text-[#b6af61] hover:underline cursor-pointer text-[1.1rem] mb-2">
                <span className="flex items-center gap-3 hover:gap-5">
                  Sales: {contactData.sales} <BsArrowUpRight />
                </span>
              </li>
              <li className="hover:text-[#b6af61] hover:underline cursor-pointer text-[1.1rem] mb-4">
                <span className="flex items-center gap-3 hover:gap-5">
                  Email: {contactData.email} <BsArrowUpRight />
                </span>
              </li>
              <li>
                <p className="text-sm mt-6 text-center md:text-left">
                  Copyright © {new Date().getFullYear()} - All rights reserved by
                  Innovative IT Ltd
                </p>
              </li>
            </ul>
          </div>

          {/* Second section */}
          <div className={`${darkMode ? 'text-white' : 'text-[#3c3c3b]'}`}>
            <h3 className="text-xl font-medium mb-4 text-center md:text-left">
              Address
            </h3>
            <p className="mb-6 text-center md:text-left">
              {contactData.address}
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start gap-6">
              <a href="#" className="hover:text-[#b6af61] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-[#b6af61] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-[#b6af61] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;