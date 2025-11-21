import { useEffect, useRef } from "react";
import "./LandMarks.css";
import LandMarksAnimation from "./LandMarksAnimation";
const LankMarksWithoutResponsive = () => {
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
    <section className="-mt-40 ">
      <div className={`text-6xl text-center font-familyLandMarks`}>
        {/* <h1 ref={h1Ref}>Witness, As We</h1>
        <h1 ref={h1Ref} className="font-bold">
          Transform Your <span className="font-normal">Land</span>
        </h1>
        <h1 ref={h1Ref}>
          to a <span className="font-bold">Landmark</span>
        </h1> */}
        <LandMarksAnimation></LandMarksAnimation>
      </div>
    </section>
  );
};

export default LankMarksWithoutResponsive;
