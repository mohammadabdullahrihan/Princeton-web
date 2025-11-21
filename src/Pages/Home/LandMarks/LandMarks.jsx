import { useEffect, useRef } from "react";
import "./LandMarks.css";
import LandMarksAnimation from "./LandMarksAnimation";
// import { motion } from "framer-motion";

const LandMarks = () => {
  const h1Ref = useRef(null);

  useEffect(() => {
    const h1Element = h1Ref.current;

    if (h1Element) {
      const textContent = h1Element.textContent || "";

      // Only proceed if textContent is valid and not an empty string
      if (textContent.length > 0) {
        h1Element.textContent = ""; // Clear the content for the animation

        let currentIndex = 0;
        const intervalId = setInterval(() => {
          h1Element.textContent += textContent[currentIndex];
          currentIndex++;

          if (currentIndex >= textContent.length) {
            clearInterval(intervalId);
          }
        }, 60);
      }
    }
  }, []);

  return (
    <section className="mt-10  md:mt-24 lg:mt-32">
      <div className="text-center font-familyLandMarks px-5 sm:px-10 md:px-16">
        {/* You can choose to use the animation directly */}
        {/* <motion.div
             animate={{ rotate: 45, scale: 1.0 }}
            transition={{ ease: "anticipate", duration: 2 }}
          > */}
        <LandMarksAnimation />
        {/* </motion.div> */}
        {/* Alternatively, you can add your original text if needed */}
        {/* <h1 ref={h1Ref} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Witness, As We
        </h1>
        <h1 ref={h1Ref} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Transform Your <span className="font-normal">Land</span>
        </h1>
        <h1 ref={h1Ref} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          to a <span className="font-bold">Landmark</span>
        </h1> */}
      </div>
    </section>
  );
};

export default LandMarks;
