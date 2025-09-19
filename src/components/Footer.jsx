import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-[10%] py-10 flex flex-col gap-5 bg-black text-white">
      <div>
        Interested in working together? Email me at{" "}
        <div className="inline text-blue-300">samuel.yh.lee@gmail.com</div>!
      </div>
      <div className="justify-between flex">
        © {new Date().getFullYear()} Lee Yan Ho Samuel. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
