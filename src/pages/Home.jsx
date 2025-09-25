import Section from "./Section";
import WebsiteFrame from "../components/WebsiteFrame";
import Window from "../components/Window";
import ExternalLink from "../components/ExternalLink.jsx";

const Home = () => {
  return (
    <Section
      content={
        <div className="my-10 w-full flex flex-col">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="lg:w-full animate-fadeInLeft">
              <Window
                title="Introduction"
                content={
                  <div className="p-5 flex flex-col lg:flex-row gap-5 lg:justify-between">
                    <img
                      src="https://github.com/wavesam.png"
                      alt="GitHub profile"
                      className="w-[117px] h-[117px] border-4 border-black"
                    />
                    <p className="w-full text-2xl lg:text-3xl">
                      Hi, I'm <strong>Samuel Lee!</strong>
                      <br></br>I specialize in building modern web applications
                      with <strong className="text-sky-700">React</strong>,{" "}
                      <strong className="text-sky-700">Vite</strong>, and{" "}
                      <strong className="text-sky-700">Tailwind CSS</strong>.
                    </p>
                  </div>
                }
              ></Window>
            </div>

            <div className="animate-fadeInRight">
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
                  </div>
                }
              ></Window>
            </div>
          </div>

          <div className="mt-5 animate-fadeInUp">
            <Window
              title="Projects"
              content={
                <div className="w-full h-full p-5 grid grid-cols-1 xl:grid-cols-2 gap-5">
                  <WebsiteFrame
                    site="wavesam.io/kahatacademy"
                    title="Rickroll Generator"
                    description="Users can generate custom rickroll links! Featuring a custom URL parameters and a mobile-responsive design."
                    tags={["React", "Vite", "Tailwind CSS"]}
                  />
                  <WebsiteFrame
                    site="kwantum-institute.github.io"
                    title="Kwantum Institute"
                    description="Lead frontend developer at Kwantum Institute and responsible for all of the front-end development. Collaborated with the backend team to integrate the website with a Django APIs."
                    tags={["React", "Django", "Vite", "Tailwind CSS"]}
                  />
                  <WebsiteFrame
                    site="wavesam.io"
                    title="Portfolio Website"
                    description="This is the website you are currently on! Deployed via Github Pages."
                    tags={["React", "Vite", "Tailwind CSS"]}
                  />
                  <div className="hidden lg:inline w-full h-full bg-black/80 border-4 border-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px]"></div>
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
