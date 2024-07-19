import Section from "./Section";

const Home = () => {
  return (
    <Section
      content={
        <div className="engrave flex flex-col gap-3 w-4/5 leading-none">
          <div className="text-6xl sm:text-[100px] md:text-[140px] lg:text-[170px]">
            Hi, I'm
          </div>
          <div className="pb-20 text-6xl sm:text-[100px] md:text-[140px] lg:text-[170px] text-nowrap">
            Sambeige.
          </div>
          <div className="-mt-20 text-3xl">Your average react developer :)</div>
          <div className="text-xl">
            Proficient in{" "}
            <div className="text-black inline">
              react, html, css, vite and tailwind.
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Home;
