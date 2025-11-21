import { useEffect, useRef, useState } from "react";
// import NumberTicker from "@/components/magicui/number-ticker";
import CountUp from "react-countup";

const LandMarksDetailsAndPhotos = () => {
  const [commitment, setCommitment] = useState("");

  // track the component is in visible or not
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("https://chuti-harmony-server.vercel.app/api/v1/withness/withness")
      .then((res) => res.json())
      .then((data) => {
        setCommitment(data.data);
        // console.log(data)
      });

    // intersectionObserver to detect when the section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="lg:flex cols-3 items-center justify-center text-3xl p-20 font-familyPortfolio "
    >
      <div>
        <div className="mb-20 font-familyPortfolio w-72">
          {inView && (
            <CountUp
              className="text-[#8E8A1F] text-[2.8rem]"
              duration={3.75}
              end={commitment.totalAreaInputOne}
            ></CountUp>
          )}
          {/* <p className="text-[#8E8A1F]">{commitment.totalAreaInputOne}+</p> */}

          {/* <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
            <NumberTicker value={100} />
          </p> */}
          <h1>{commitment.totalAreaInputTwo}</h1>
          <p>{commitment.totalAreaInputThree}</p>
        </div>
        <div className="mb-20 font-familyPortfolio lg:w-96">
          {/* <p className="text-[#8E8A1F]">{commitment.activeYearsInputOne}</p> */}
          {inView && (
            <CountUp
              className="text-[#8E8A1F] text-[2.8rem]"
              duration={3.75}
              end={commitment.activeYearsInputOne}
            />
          )}
          {/* <h1>{commitment.activeYearsInputTwo}</h1> */}
          {/* <p>{commitment.activeYearsInputThree}</p> */}
        </div>
        <div className="mt-20 font-familyPortfolio w-72">
          {/* <p className="text-[#8E8A1F]">
            {commitment.completedProjectsInputOne}
          </p> */}
          {inView && (
            <CountUp
              className="text-[#8E8A1F] text-[2.8rem]"
              duration={3.75}
              end={commitment.completedProjectsInputOne}
            />
          )}
          <h1>{commitment.completedProjectsInputTwo}</h1>
          <p>{commitment.completedProjectsInputThree}</p>
        </div>
      </div>
      <div className="block">
        <img  loading="lazy" className="w-[450px] p-5" src={commitment.image} alt="" />
      </div>
      <div className="lg:ml-20">
        <div className="mb-20 font-familyPortfolio w-72">
          {inView && (
            <CountUp
              className="text-[#8E8A1F] text-[2.8rem]"
              duration={3.75}
              end={commitment.numberOfProjectsInputOne}
            />
          )}
          <h1>{commitment.numberOfProjectsInputTwo}</h1>
          <p>{commitment.numberOfProjectsInputThree}</p>
        </div>
        <div className="mb-20 font-familyPortfolio w-72">
          {inView && (
            <CountUp
              className="text-[#8E8A1F] text-[2.8rem]"
              duration={5.75}
              end={commitment.clientsInputOne}
            />
          )}
          <h1>{commitment.clientsInputTwo}</h1>
          <h1>{commitment.clientsInputThree}</h1>
        </div>
        <div className="mt-20 font-familyPortfolio w-72">
          {inView && (
            <CountUp
              className="text-[#8E8A1F] text-[2.8rem]"
              duration={3.75}
              end={commitment.OtherThingsInputOne}
            />
          )}
          <h1>{commitment.OtherThingsInputTwo}</h1>
          <p>{commitment.OtherThingsInputThree}</p>
        </div>
      </div>
    </section>
  );
};

export default LandMarksDetailsAndPhotos;
