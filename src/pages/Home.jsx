import Section from "./Section";
import WebsiteFrame from "../components/WebsiteFrame";

const Home = () => {
  return (
    <Section
      content={
        <div className="flex flex-col gap-3 w-4/5 leading-none text-center">
          <div className="text-6xl sm:text-[100px] md:text-[120px] lg:text-[160px]">
            Hi, I'm
          </div>
          <div className="pb-20 text-6xl sm:text-[100px] md:text-[120px] lg:text-[160px] text-nowrap">
            Sambeige!
          </div>
          <div className="text-3xl -mt-20">
            Check out some of my proudest works below.
          </div>
          <h1 className="mt-20 text-4xl">1. Kwantum Institute</h1>
          <p>
            I was the lead web developer at Kwantum Institute, responsible for
            the majority of the front-end development.
          </p>
          <WebsiteFrame site="kwantum-institute.github.io" />
        </div>
      }
    />
  );
};

export default Home;
