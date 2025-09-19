const Section = ({ content }) => {
  return (
    <div className="w-full min-h-full">
      <div className="px-[10%] flex flex-col gap-3 items-center justify-center">
        {content}
      </div>
    </div>
  );
};

export default Section;
