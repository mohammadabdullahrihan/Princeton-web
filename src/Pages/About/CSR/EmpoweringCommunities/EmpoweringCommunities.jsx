import Slider from "react-slick";

const EmpoweringCommunities = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };
  return (
    <section className="text-white mb-40">
      <div className="text-center m-10">
        <h1 className="text-6xl uppercase">Empowering Communities</h1>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img loading="lazy" className="p-5"
              src="https://i.ibb.co.com/NpnZQ2V/Rectangle-5803-2-original.png"
              alt=""
            />
          </div>
          <div>
            <img loading="lazy" className="p-5"
              src="https://i.ibb.co.com/b2hFWGs/AWCH-1-2e16d0ba-fill-500x400-c0-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img loading="lazy" className="p-5"
              src="https://i.ibb.co.com/mT1Dycd/AWCH-2-2e16d0ba-fill-500x400-c0-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img loading="lazy" className="p-5"
              src="https://i.ibb.co.com/GxsqJD9/AWCH-3-2e16d0ba-fill-500x400-c0-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img  loading="lazy" className="p-5"
              src="https://i.ibb.co.com/4dLzWvG/AWCH-4-2e16d0ba-fill-500x400-c0.jpg"
              alt=""
            />
          </div>
          <div>
            <img loading="lazy" className="p-5"
              src="https://i.ibb.co.com/vqQmtPx/AWCH-5-2e16d0ba-fill-500x400-c0.jpg"
              alt=""
            />
          </div>
          <div>
            <img loading="lazy" className="p-5"
              src="https://i.ibb.co.com/LpW9hns/AWCH-6-2e16d0ba-fill-500x400-c0.jpg"
              alt=""
            />
          </div>
          <div>
            <img loading="lazy" className="p-5"
              src="https://i.ibb.co.com/kgY25qs/AWCH-7-2e16d0ba-fill-500x400-c0.jpg"
              alt=""
            />
          </div>
          <div>
            <img  loading="lazy" className="p-5"
              src="https://i.ibb.co.com/8BHDjHN/AWCH-8-2e16d0ba-fill-500x400-c0.jpg"
              alt=""
            />
          </div>
          <div>
            <img  loading="lazy" className="p-5"
              src="https://i.ibb.co.com/Swhgsnn/AWCH-9-2e16d0ba-fill-500x400-c0.jpg"
              alt=""
            />
          </div>
          <div>
            <img  loading="lazy" className="p-5"
              src="https://i.ibb.co.com/zxrcd72/AWCH-11-2e16d0ba-fill-500x400-c0.jpg"
              alt=""
            />
          </div>
          <div>
            <img  loading="lazy" className="p-5"
              src="https://i.ibb.co.com/r3bKmnj/AWCH-12-2e16d0ba-fill-500x400-c0.jpg"
              alt=""
            />
          </div>
          <div>
            <img  loading="lazy" className="p-5"
              src="https://i.ibb.co.com/qWrs8Vk/AWCH-13-2e16d0ba-fill-500x400-c0.jpg"
              alt=""
            />
          </div>
          <div>
            <img  loading="lazy" className="p-5"
              src="https://i.ibb.co.com/zRPfpct/AWCH-15-2e16d0ba-fill-500x400-c0.jpg"
              alt=""
            />
          </div>
          <div>
            <img  loading="lazy" className="p-5"
              src="https://i.ibb.co.com/cNRDxwh/AWCH-17-2e16d0ba-fill-500x400-c0-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img  loading="lazy" className="p-5"
              src="https://i.ibb.co.com/WGpfScb/AWCH-18-2e16d0ba-fill-500x400-c0-1.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default EmpoweringCommunities;
