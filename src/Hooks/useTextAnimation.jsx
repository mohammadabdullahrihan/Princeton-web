import { useEffect, useRef } from "react";

const useTextAnimation = (initialText, speed = 60) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      const textContent = initialText || ""; // Safeguard against undefined

      if (textContent.length > 0) {
        element.textContent = ""; // Clear the content for the animation

        let currentIndex = 0;
        const intervalId = setInterval(() => {
          element.textContent += textContent[currentIndex];
          currentIndex++;

          if (currentIndex >= textContent.length) {
            clearInterval(intervalId);
          }
        }, speed);
      }
    }
  }, [initialText, speed]);

  return elementRef; // Return the ref to be used in the component
};

export default useTextAnimation;
