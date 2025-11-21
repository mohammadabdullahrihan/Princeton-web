const NewsEventsHeader = () => {
  return (
    <section className="bg-[#FFFAF4] p-10 sm:p-20 grid grid-cols-1 sm:grid-cols-2">
      <h1
        className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl opacity-100 transition-all duration-500 ease-in-out font-mono text-[#3c3c3b]"
        data-v-70732489
        data-scroll
        data-scroll-call="revealElement"
        style={{
          translate: "none",
          rotate: "none",
          scale: "none",
          filter: "blur(0px)",
          transform: "translate(0px, 0px)",
          opacity: 1,
          visibility: "inherit",
        }}
      >
        News & <br /> Events
      </h1>
      <h1 className="text-lg sm:text-xl md:text-2xl lg:p-20 grid items-center lg:place-items-end lg:mt-0 mt-5">
        Stay updated with us
      </h1>
    </section>
  );
};

export default NewsEventsHeader;