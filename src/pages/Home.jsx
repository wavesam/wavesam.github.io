import Section from "./Section";
import WebsiteFrame from "../components/WebsiteFrame";
import Window from "../components/Window";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <Section
      content={
        <div className="my-[20px] sm:my-10 w-full flex flex-col">
          <div className="flex flex-col xl:flex-row gap-[20px] sm:gap-5">
            <div className="w-full md:w-2/3 xl:w-1/2 animate-fadeInLeft">
              <Window
                title="Introduction"
                content={
                  <div className="p-5 flex flex-col lg:flex-row gap-5 lg:justify-between">
                    <img
                      src="https://github.com/wavesam.png"
                      alt="GitHub profile"
                      className="w-[140px] h-[140px] border-4 border-black"
                    />
                    <div className="w-full flex flex-col gap-3 lg:justify-between">
                      <p className="w-full text-3xl">
                        Hey, I'm <strong>Samuel Lee</strong>,{" "}
                        <br className="hidden sm:inline"></br>a{" "}
                        <strong className="text-sky-700">
                          full stack developer.
                        </strong>
                      </p>
                      <motion.div
                        className="w-full sm:w-[300px] lg:w-full py-2 bg-sky-700 border-4 border-black text-white font-bold text-center text-xl sm:text-2xl hover:bg-sky-800 cursor-pointer"
                        onClick={() =>
                          window.open("mailto:samuel@wavesam.io", "_blank")
                        }
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Let's get in touch!
                      </motion.div>
                    </div>
                  </div>
                }
              ></Window>
            </div>

            <div className="w-full xl:w-1/2 animate-fadeInRight">
              <Window
                title="Experience"
                content={
                  <div className="h-[180px]">
                    <div className="p-5 flex flex-col gap-3">
                      {/*
                    <div className="w-full h-full text-xl lg:text-xl flex justify-between">
                      <p className="text-2xl">
                        <strong>Class Representative</strong> at PolyU
                      </p>
                      <p className="text-gray-500 text-xl">2025 - Present</p>
                    </div>
                    */}
                    </div>
                  </div>
                }
              ></Window>
            </div>
          </div>

          <div className="mt-[20px] sm:mt-5 animate-fadeInUp">
            <Window
              title="Projects"
              content={
                <div className="w-full h-full p-5 grid grid-cols-1 xl:grid-cols-2 gap-5 bg-white">
                  <WebsiteFrame
                    site="wavesam.io/kahatacademy"
                    title="Rickroll Generator"
                    description="Users can generate custom rickroll links! Featuring custom URL parameters and a mobile-responsive design."
                    tags={["React", "Vite", "Tailwind CSS"]}
                  />
                  <WebsiteFrame
                    site="kwantum-institute.github.io"
                    title="Kwantum Institute"
                    description="Lead frontend developer at Kwantum Institute and responsible for all of the front-end development. Collaborated with the backend team to integrate the website with Django APIs."
                    tags={["React", "Django", "Vite", "Tailwind CSS"]}
                  />
                  <WebsiteFrame
                    site="wavesam.io"
                    title="Portfolio Website"
                    description="This is the website you are currently on! Deployed via Github Pages."
                    tags={["React", "Vite", "Tailwind CSS"]}
                  />
                  <div className="hidden xl:inline w-full h-full bg-black/80 border-4 border-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px]"></div>
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
