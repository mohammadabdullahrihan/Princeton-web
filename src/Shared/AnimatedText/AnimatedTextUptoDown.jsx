import { useEffect, useState } from "react";
import "./AnimatedTextUptoDown.css"; // আলাদা CSS ফাইল ব্যবহার করা হচ্ছে

const AnimatedTextUptoDown = ({ text, animationType = "sequence" }) => {
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    if (!text) return;

    let delay = 100;
    let strArray = text.split("");
    let formattedText = new Array(strArray.length).fill("");

    if (animationType === "random") {
      let delayArray = [];
      for (let j = 0; j < strArray.length; j++) {
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * strArray.length);
        } while (delayArray.includes(randomIndex));
        delayArray[j] = randomIndex;
      }
      for (let i = 0; i < delayArray.length; i++) {
        let index = delayArray[i];
        formattedText[index] = wrapWithSpan(strArray[index], delay);
        delay += 80;
      }
    } else {
      for (let i = 0; i < strArray.length; i++) {
        formattedText[i] = wrapWithSpan(strArray[i], delay);
        delay += 150;
      }
    }

    setAnimatedText(formattedText.join(""));
  }, [text, animationType]);

  function wrapWithSpan(char, delay) {
    return char !== " "
      ? `<span style="animation-delay:${delay}ms">${char}</span>`
      : " ";
  }

  return (
    <div className="animated-text">
      <h1
        className={`cssanimation ${animationType}`}
        dangerouslySetInnerHTML={{ __html: animatedText }}
      />
    </div>
  );
};

export default AnimatedTextUptoDown;
