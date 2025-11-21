import { TypeAnimation } from "react-type-animation";

const LandMarksAnimationWithoutResponsive = () => {
  return (
    <div>
      <TypeAnimation
        style={{ whiteSpace: "pre-line", height: "195px", display: "block" }}
        sequence={[
          `Witness, As We\nTransform Your Land\nto a Landmark`,
          "",
        ]}
        repeat={Infinity}
      />
    </div>
  );
};

export default LandMarksAnimationWithoutResponsive;
