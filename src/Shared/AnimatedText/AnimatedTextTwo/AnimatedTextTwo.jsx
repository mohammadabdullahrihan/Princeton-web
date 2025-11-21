import { useEffect, useState } from "react";

const AnimatedTextTwo = ({ text, type = "sequence" }) => {
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    if (!text) return;

    let str = "";
    let delay = type === "sequence" ? 100 : 70;
    let delayArray = [];
    let letters = text.trim().split("");

    if (type === "random") {
      for (let j = 0; j < letters.length; j++) {
        while (true) {
          let random = Math.floor(Math.random() * letters.length);
          if (!delayArray.includes(random)) break;
        }
        delayArray.push(random);
      }
    }

    letters.forEach((char, index) => {
      if (char !== " ") {
        let animDelay = type === "random" ? delayArray[index] * 80 : delay;
        str += `<span style="display: inline-block; animation: leKickOutBehind 1s both; animation-delay: ${animDelay}ms;">${char}</span>`;
        delay += type === "sequence" ? 150 : 80;
      } else {
        str += " ";
      }
    });

    setAnimatedText(str);
  }, [text, type]);

  return (
    <div style={{ display: "inline-block" }}>
      <span dangerouslySetInnerHTML={{ __html: animatedText }} />
      <style>
        {`
          @keyframes leKickOutBehind {
            40% { transform: rotate(-45deg); }
            100% { transform: rotate(0deg); animation-timing-function: cubic-bezier(0,.9,.7,1.45); }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedTextTwo;
