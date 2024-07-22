const Section = ({ content }) => {
  return (
    <div className="w-full min-h-full py-[50px]">
      <div className="engrave flex flex-col gap-3 items-center justify-center">
        {content}
      </div>
    </div>
  );
};

export default Section;
