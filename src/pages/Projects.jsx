const Projects = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-3 items-center">
      <div className="w-3/4 h-full flex flex-col items-center">
        <div className="w-full">
          <h1>1. Kwantum Institute</h1>
          <p>
            I was the lead web developer at Kwantum Institute, responsible for
            the majority of the front-end development.
          </p>
        </div>
        <iframe
          src="https://kwantum-institute.github.io"
          className="mt-5 lg:-mt-20 w-full lg:w-[133.33%] h-full rounded-3xl lg:scale-75 bg-white"
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
    </div>
  );
};

export default Projects;
