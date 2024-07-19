import Section from "./Section";

const Projects = () => {
  return (
    <Section
      content={
        <div className="w-4/5 h-screen flex flex-col items-center">
          <div className="w-full">
            <h1>1. Kwantum Institute</h1>
            <p>
              I was the lead web developer at Kwantum Institute, responsible for
              the majority of the front-end development.
            </p>
          </div>
          <div className="mt-5 w-full h-[40px] pt-2 bg-white rounded-t-3xl flex items-center justify-center">
            <div className="w-[95%] md:w-1/2 h-full px-3 bg-gray-200 rounded-full text-center text-xl font-sans font-light flex justify-between">
              <p className="absolute">🔎</p>
              <p></p>
              <div>kwantum-institute.github.io</div>
              <p></p>
            </div>
          </div>
          <div className="w-full h-full border-8 border-white rounded-b-3xl bg-white flex items-center justify-center">
            <iframe
              src="https://kwantum-institute.github.io"
              className="w-full h-full rounded-3xl bg-white"
            >
              <p>Your browser does not support iframes.</p>
            </iframe>
          </div>
        </div>
      }
    />
  );
};

export default Projects;
