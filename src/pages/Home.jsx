import Section from "./Section";

const Home = () => {
  return (
    <Section
      content={
        <div className="engrave flex flex-col gap-3 w-4/5 leading-none">
          <div className="text-7xl sm:text-[100px] md:text-[140px] lg:text-[180px]">
            Hello, I'm
          </div>
          <div className="pb-20 text-7xl sm:text-[100px] md:text-[140px] lg:text-[180px] text-amber-900 text-nowrap">
            Sambeige :)
          </div>
        </div>
      }
    />
  );
};

export default Home;
