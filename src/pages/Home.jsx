import Section from "./Section";
import WebsiteFrame from "../components/WebsiteFrame";
import Window from "../components/Window";
import ExternalLink from "../components/ExternalLink.jsx";

const Home = () => {
  return (
    <Section
      content={
        <div className="my-10 w-full flex flex-col gap-2">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="lg:w-full">
              <Window
                title="Introduction"
                content={
                  <div className="p-5 flex flex-col lg:flex-row gap-5 lg:justify-between">
                    <img
                      src="https://github.com/wavesam.png"
                      alt="GitHub profile"
                      className="w-[117px] h-[117px] border-4 border-black"
                    />
                    <p className="text-2xl lg:text-3xl">
                      Hi, I'm <strong>Lee Yan Ho Samuel</strong>! I am an
                      aspiring full stack developer building with{" "}
                      <strong className="text-blue-700">React Native</strong>{" "}
                      and <strong className="text-blue-700">Node.js</strong>.
                    </p>
                  </div>
                }
              ></Window>
            </div>

            <div>
              <Window
                title="Experience"
                content={
                  <div className="w-full h-full p-5 text-xl lg:text-xl flex flex-col gap-3">
                    <div>
                      Currently studying AI Engineering at{" "}
                      <strong>
                        <ExternalLink
                          size="md"
                          href="https://www.polyu.edu.hk/eee/study/undergraduate-programmes/beng-and-bsc-scheme-in-information-and-artificial-intelligence-engineering/?sc_lang=en"
                        >
                          PolyU
                        </ExternalLink>
                      </strong>
                    </div>
                    <div>
                      Other stuff{" "}
                      <strong>
                        <ExternalLink size="md" href="">
                          I'll add
                        </ExternalLink>
                      </strong>
                    </div>
                  </div>
                }
              ></Window>
            </div>
          </div>

          <div className="mt-5">
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
