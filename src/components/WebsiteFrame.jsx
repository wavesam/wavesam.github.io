const WebsiteFrame = ({ site }) => {
  return (
    <div className="flex flex-col">
      <div className="sm:flex mt-5 w-full h-[45px] pt-[10px] bg-gray-900 rounded-t-3xl flex items-center justify-center">
        <div className="flex w-[95%] md:w-1/2 h-full px-3 bg-gray-800 rounded-full text-center text-xl text-white font-light justify-between items-center text-black">
          <p className="absolute">🔎</p>
          <p></p>
          <div>{site}</div>
          <p></p>
        </div>
      </div>
      <div className="w-full h-[700px] rounded-b-3xl border-8 border-gray-900 bg-gray-900 flex items-center justify-center">
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
