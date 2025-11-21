import { useState } from "react";
import TeamStandardsPhoto from "./TeamStandardsPhoto";
import { useEffect } from "react";
import AnimatedTextUptoDown from "../../../../Shared/AnimatedText/AnimatedTextUptoDown";

const TeamStandards = () => {
  const [bounce, setBounce] = useState(true);

  useEffect(() => {
    // Stop the animation after 2 seconds (2000 milliseconds)
    const timer = setTimeout(() => {
      setBounce(false);
    }, 1000);
    return () => clearTimeout(timer); // Cleanup timer if the component unmounts
  }, []);
  return (
    <section className={`lg:mx-40`}>
      <div className={`${bounce ? "animate-bounce" : ""}`}>
        <h1 className="uppercase text-center text-8xl font-bold">
          <AnimatedTextUptoDown
            text="The team that sets"
            animationType="sequence"
          />
          <AnimatedTextUptoDown text="the standards" animationType="random" />
        </h1>
      </div>
      <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <TeamStandardsPhoto></TeamStandardsPhoto>
      </div>
    </section>
  );
};

export default TeamStandards;
