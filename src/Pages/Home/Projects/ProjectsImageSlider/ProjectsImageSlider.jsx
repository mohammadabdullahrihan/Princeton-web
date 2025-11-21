import Slider from "react-slick";

const ProjectImageSlider = ({ featureProject }) => {
  if (!featureProject) {
    return <p>Loading project...</p>;
  }

  const { projectType, projectName, projectImg, projectVideo } = featureProject;

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "40px",
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "40px",
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item">
          <img
           loading="lazy"
            src={projectImg}
            alt={projectName}
            className="slider-image"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
          <h3 className="text-center mt-2">{projectName}</h3>
        </div>
      </Slider>
    </div>
  );
};

export default ProjectImageSlider;
