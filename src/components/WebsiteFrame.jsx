const WebsiteFrame = ({ site }) => {
  return (
    <div className="flex flex-col">
      <div className="hidden sm:flex mt-5 w-full h-[45px] pt-[8px] bg-white rounded-t-3xl flex items-center justify-center">
        <div className="flex w-[95%] md:w-1/2 h-full px-3 bg-gray-200 rounded-full text-center text-xl font-light justify-between items-center text-black">
          <p className="absolute">🔎</p>
          <p></p>
          <div>{site}</div>
          <p></p>
        </div>
      </div>
      <div className="w-full h-[700px] border-8 border-white rounded-3xl sm:rounded sm:rounded-b-3xl bg-white flex items-center justify-center">
        <iframe
          src={`https://${site}`}
          className="w-full h-full rounded-3xl bg-white"
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
    </div>
  );
};

export default WebsiteFrame;
