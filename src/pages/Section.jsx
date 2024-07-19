const Section = ({ content }) => {
  return (
    <div className="w-full min-h-full my-[100px]">
      <div className="flex flex-col gap-3 items-center justify-center">
        {content}
      </div>
    </div>
  );
};

export default Section;
