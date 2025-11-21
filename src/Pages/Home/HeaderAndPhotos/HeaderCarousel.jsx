import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImage1 from "../../../assets/images/chuti-harmony/header-slider/1.jpg"
import sliderImage2 from "../../../assets/images/chuti-harmony/header-slider/2.jpg"
import sliderImage3 from "../../../assets/images/chuti-harmony/header-slider/3.jpg"
// import sliderImage4 from "../../../assets/images/chuti-harmony/header-slider/4.jpg"
// import sliderImage5 from "../../../assets/images/chuti-harmony/header-slider/5.jpg"
// import sliderImage6 from "../../../assets/images/chuti-harmony/header-slider/6.jpg"
import "./HeaderCarousel.css";



const HeaderCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    pauseOnHover: false,
    fade: true,
    button: false,
    cssEase: "linear",
    arrows: false,
  };
  const photos = [
    {
      id: 1,
      url: sliderImage1
    },
    {
      id: 2,
      url: sliderImage2,
    },
    {
      id: 3,
      url: sliderImage3,
    },
    // {
    //   id: 4,
    //   url: sliderImage4,
    // },
    // {
    //   id: 5,
    //   url: sliderImage5,
    // },
    // {
    //   id: 6,
    //   url: sliderImage6,
    // },
  ];
  return (
    <div className="scrollable-element " style={{ margin: "0 auto" }}>
      <Slider {...settings}>
        {photos.map((photo) => (
          <div key={photo.id}>
            <img
            //  loading="lazy"
              src={photo.url}
              alt={`Slide ${photo.id}`}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeaderCarousel;
