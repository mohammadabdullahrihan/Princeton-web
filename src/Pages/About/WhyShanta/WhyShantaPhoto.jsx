import whyShantaPhoto from "../../../assets/images/chuti-harmony/header-slider/2.jpg";

const WhyShantaPhoto = () => {
  return (
    <section>
      <div>
        <h1 className="lg:text-8xl font-bold text-center uppercase">Why Chuti Harmony?</h1>
      </div>
      <div>
        <img  loading="lazy" src={whyShantaPhoto} alt="" />
      </div>
    </section>
  );
};

export default WhyShantaPhoto;
