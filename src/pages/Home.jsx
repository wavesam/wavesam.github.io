import Section from "./Section";
import WebsiteFrame from "../components/WebsiteFrame";

const Home = () => {
  return (
    <Section
      content={
        <div className="my-20 w-full flex flex-col gap-2">
          <div className="w-full flex justify-center">
            <div className="md:w-2/3 flex flex-col lg:flex-row gap-10 lg:justify-between lg:items-center">
              <img
                src="https://github.com/wavesam.png"
                alt="GitHub profile"
                className="w-[150px] h-[150px] rounded-full border-4 border-black"
              />
              <p className="text-3xl/10">
                Hi, I'm <strong>Lee Yan Ho Samuel</strong>! I am an aspiring
                full stack developer building with{" "}
                <strong className="text-blue-700">React Native</strong> and{" "}
                <strong className="text-blue-700">Node.js</strong>.
              </p>
            </div>
          </div>

          <div className="my-20 w-full flex gap-2 items-center">
            <hr className="w-full border-2 rounded-full border-black"></hr>
            <div className="w-[500px] md:w-[800px] text-3xl text-center font-bold text-blue-700">
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
