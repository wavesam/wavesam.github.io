const Window = ({ title, content }) => {
  return (
    <div className="w-full h-full border-4 border-black">
      {/* Traffic light buttons */}
      <div className="relative flex items-center p-4 border-b-4 border-black bg-gray-300">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-sky-900"></div>
          <div className="w-3 h-3 bg-sky-700"></div>
          <div className="w-3 h-3 bg-sky-500"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-2xl font-bold">{title}</div>
        </div>
      </div>
      <div className="h-[calc(100%-theme(space.8)-16px)] bg-white">
        {content}
      </div>
    </div>
  );
};

export default Window;
