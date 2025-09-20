import Section from "./Section";
import WebsiteFrame from "../components/WebsiteFrame";
import Window from "../components/Window";

const Home = () => {
  return (
    <Section
      content={
        <div className="my-10 w-full flex flex-col gap-2">
          <div className="lg:w-2/3">
            <Window
              title="Introduction"
              content={
                <div className="p-10 flex flex-col lg:flex-row gap-10 lg:justify-between lg:items-center bg-white">
                  <img
                    src="https://github.com/wavesam.png"
                    alt="GitHub profile"
                    className="w-[150px] h-[150px] border-4 border-black"
                  />
                  <p className="text-2xl lg:text-3xl/10">
                    Hi, I'm <strong>Lee Yan Ho Samuel</strong>! I am an aspiring
                    full stack developer building with{" "}
                    <strong className="text-blue-700">React Native</strong> and{" "}
                    <strong className="text-blue-700">Node.js</strong>.
                  </p>
                </div>
              }
            ></Window>
          </div>

          <div className="mt-10">
            <Window
              title="Projects"
              content={
                <div className="p-5 justify-between flex flex-col lg:flex-row gap-5">
                  <WebsiteFrame
                    site="kwantum-institute.github.io"
                    title="Kwantum Institute"
                    description="I was the lead web developer at Kwantum Institute, responsible for
      the majority of the front-end development."
                  />
                  <WebsiteFrame
                    site="wavesam.github.io"
                    title="Portfolio Website"
                    description="This is the website you are currently on! I built this portfolio website using React and Tailwind CSS."
                  />
                </div>
              }
            ></Window>
          </div>
        </div>
      }
    />
  );
};

export default Home;
