import Section from "./Section";
import WebsiteFrame from "../components/WebsiteFrame";

const Home = () => {
  return (
    <Section
      content={
        <div className="w-full flex flex-col gap-2 leading-none">
          <p className="text-2xl my-20 font-mono">
            Hi, I'm Samuel Lee! I'm an aspiring full stack developer building
            with{" "}
            <div className="inline text-green-700 font-bold">React Native</div>{" "}
            and <div className="inline text-green-700 font-bold">Node.js</div>.
          </p>
          <div className="mb-20 w-full flex gap-2">
            <hr className="w-full border-2 rounded-full border-black"></hr>
            <div className="-mt-4 text-3xl w-[1100px] text-center font-mono font-bold text-blue-700">
              Notable Projects
            </div>
            <hr className="w-full border-2 rounded-full border-black"></hr>
          </div>

          <h1 className="text-3xl text-center font-semibold">
            Kwantum Institute
          </h1>
          <p className="text-center text-2xl">
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
