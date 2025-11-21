import { TypeAnimation } from "react-type-animation";

const LandMarksAnimation = () => {
  return (
    <div className="w-full sm:px-4 md:px-8 lg:px-16 lg:-mt-20 -mt-[550px] ">
      <TypeAnimation
        style={{ whiteSpace: "pre-line", height: "15px", display: "block" }}
        
        sequence={[
          // `Escape to Excellence: 
          `Where Nature’s Beauty Meets Unmatched Luxury, Crafting Timeless Memories Amidst Tranquility at Bangladesh’s Premier Resort.`,
          "",
        ]}
        repeat={Infinity}
      />
    </div>
  );
};

export default LandMarksAnimation;
