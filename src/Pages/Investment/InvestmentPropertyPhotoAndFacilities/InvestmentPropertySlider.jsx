// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./InvestmentPropertySlider.css";
// Import required modules

import image1 from "../../../assets/images/chuti-harmony/header-slider/1.jpg";
import image2 from "../../../assets/images/chuti-harmony/header-slider/2.jpg";
import image3 from "../../../assets/images/chuti-harmony/header-slider/3.jpg";
import image4 from "../../../assets/images/chuti-harmony/header-slider/4.jpg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

const InvestmentPropertySlider = () => {
  const progressContent = useRef(null);

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img  loading="lazy" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img  loading="lazy" src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img  loading="lazy" src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img  loading="lazy" src={image4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default InvestmentPropertySlider;
