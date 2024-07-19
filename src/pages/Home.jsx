import Section from "./Section";

const Home = () => {
  return (
    <Section
      content={
        <div className="flex flex-col gap-3 w-4/5 leading-none">
          <div className="pop text-[200px]">Hello, I'm</div>
          <div className="engrave">
            <div className="text-[200px] pb-10">Sambeige.</div>
          </div>
        </div>
      }
    />
  );
};

export default Home;
