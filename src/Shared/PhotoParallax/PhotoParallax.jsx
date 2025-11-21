import { useEffect, useRef, useState } from "react";

const PhotoParallax = ({ src, containerHeight = 600 }) => {
  const photoRef = useRef(null);
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && photoRef.current) {
        const container = containerRef.current;
        const containerRect = container.getBoundingClientRect();
        const containerTop = containerRect.top;

        // Adjust photo position when the container is visible
        if (containerTop <= 0 && containerTop > -containerRect.height) {
          setOffset(-containerTop * 0.5); // Adjust the factor for parallax speed
        } else if (containerTop > 0) {
          setOffset(0); // Reset to original position
        } else {
          setOffset(-containerRect.height * 0.5); // Stop at the bottom
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-10"
      style={{ height: `${containerHeight}px` }}
    >
      <img
        loading="lazy"
        ref={photoRef}
        src={src}
        alt=""
        className="absolute left-0 top-0"
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s ease-out",
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default PhotoParallax;
