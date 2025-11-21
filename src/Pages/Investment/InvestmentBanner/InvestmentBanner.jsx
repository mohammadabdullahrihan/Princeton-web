import investmentBannerPhoto from "../../../assets/images/Investment/2.jpg";

const InvestmentBanner = () => {
  return (
    <section>
      <div className="relative">
        {/* Image Container */}
        <div className="relative">
          {/* Background Image */}
          <img
            loading="lazy"
            className="h-[480px] w-full object-cover"
            src={investmentBannerPhoto}
            alt="Investment Banner"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        {/* Text Content */}
        <div className="absolute inset-0 lg:flex flex-col items-center justify-center text-white font-sans text-center">
          <p className="text-3xl uppercase">Ideal Place to Invest</p>
          <h1 className="text-5xl font-bold text-[#beb52b] px-10">
            Investment & Ownership Opportunities in Chuti Harmony
          </h1>
        </div>
      </div>
    </section>
  );
};

export default InvestmentBanner;
