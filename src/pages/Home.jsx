import Section from "./Section";
import WebsiteFrame from "../components/WebsiteFrame";

const Home = () => {
  return (
    <Section
      content={
        <div className="my-20 w-full flex flex-col gap-2">
          <div className="md:w-2/3 bg-gray-100 border-4 border-black">
            {/* Traffic light buttons */}
            <div className="relative flex items-center p-6 md:p-7 border-b-4 border-black bg-gray-300">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-blue-900"></div>
                <div className="w-3 h-3 bg-blue-700"></div>
                <div className="w-3 h-3 bg-blue-500"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-2xl lg:text-3xl font-bold">
                  Introduction
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 flex flex-col lg:flex-row gap-10 lg:justify-between lg:items-center bg-white">
              <img
                src="https://github.com/wavesam.png"
                alt="GitHub profile"
                className="w-[150px] h-[150px] border-4 border-black"
              />
              <p className="text-3xl/10">
                Hi, I'm <strong>Lee Yan Ho Samuel</strong>! I am an aspiring
                full stack developer building with{" "}
                <strong className="text-blue-700">React Native</strong> and{" "}
                <strong className="text-blue-700">Node.js</strong>.
              </p>
            </div>
          </div>

          <div className="mt-20 w-full bg-gray-100 border-4 border-black">
            {/* Traffic light buttons */}
            <div className="relative flex items-center p-6 md:p-7 border-b-4 border-black bg-gray-300">
              <div className="hidden md:flex space-x-2">
                <div className="w-3 h-3 bg-blue-900"></div>
                <div className="w-3 h-3 bg-blue-700"></div>
                <div className="w-3 h-3 bg-blue-500"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-2xl lg:text-3xl font-bold">
                  Notable Projects
                </div>
              </div>
            </div>

            {/* Content */}
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
          </div>
        </div>
      }
    />
  );
};

export default Home;
