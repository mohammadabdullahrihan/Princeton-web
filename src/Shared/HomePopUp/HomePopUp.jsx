import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const HomePopUp = () => {
  const [popupData, setPopupData] = useState({
    image: "",
    url: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch pop-up data from backend
  useEffect(() => {
    const fetchPopupData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://chuti-harmony-server.vercel.app/api/v1/pop-up/pop-up"
        );

        // Handle the response data structure
        const data = response.data.data || response.data;

        if (Array.isArray(data) && data.length > 0) {
          setPopupData({
            image: data[0].image || "",
            url: data[0].url || "",
          });
        } else if (data && typeof data === "object") {
          setPopupData({
            image: data.image || "",
            url: data.url || "",
          });
        }
      } catch (err) {
        console.error("Error fetching popup data:", err);
        setError("Failed to load popup data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPopupData();
  }, []);

  // Show popup when data is loaded
  useEffect(() => {
    if (isLoading || error) return;

    if (popupData.image) {
      const isMobile = window.innerWidth <= 768;
      const popupWidth = isMobile ? "98vw" : "75vw";
      const popupHeight = isMobile ? "98vh" : "70vh";

      Swal.fire({
        html: `
          <div style="
            text-align: center;
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          ">
            <a href="${popupData.url || "#"}" target="_blank" style="
              display: block;
              width: 1920px;
              height: 555px;
            ">
              <img 
                src="${popupData.image}" 
                alt="Popup"
                style="
                  max-width: 100%;
                  max-height: 100%;
                  width: 1920px;
                  height: 540px;                  
                  cursor: pointer;
                " 
                onerror="this.onerror=null;this.src='https://via.placeholder.com/1200x800?text=Image+Not+Found';"
              />
            </a>
          </div>
        `,
        showConfirmButton: false,
        background: "#ffffff",
        backdrop: `
          rgba(0,0,0,0.7)
          center
          no-repeat
        `,
        showCloseButton: true,
        closeButtonHtml: `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 100;
          ">
            <path d="M18 6L6 18" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6L18 18" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        `,
        width: popupWidth,
        height: popupHeight,
        padding: "0",
        customClass: {
          popup: "extra-large-popup",
          container: "extra-large-popup-container",
          closeButton: "custom-close-button",
        },
        timer: 15000,
      }).then((result) => {
        if (result.isDismissed) {
          console.log("Popup was closed by timer or close button");
        }
      });
    }
  }, [popupData, isLoading, error]);

  return null;
};

export default HomePopUp;
