import teamMember1 from "../../../assets/images/Life_At_Shanta/LAS_Testimonial_1.original.jpg";
import teamMember2 from "../../../assets/images/Life_At_Shanta/LAS_Testimonial_2.original.jpg";

import Slider from "react-slick";

const Teams = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className="slider-container mx-48 my-20 opacity-75">
      <Slider {...settings}>
        <div>
          <img  loading="lazy" src={teamMember1} />
        </div>
        <div>
          <img  loading="lazy" src={teamMember2} />
        </div>
      </Slider>
    </div>
  );
};

export default Teams;
