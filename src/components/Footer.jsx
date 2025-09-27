import { Link } from "react-router-dom";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <div className="px-[10%] py-10 flex flex-col gap-5 bg-black/80 text-white">
      <SocialMediaIcons />
      <div className="font-semibold">
        Interested in working together? Email me at{" "}
        <a
          href="mailto:sam@wavesam.io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline text-sky-300"
        >
          sam@wavesam.io
        </a>
        !
      </div>
      <div className="-mt-1 justify-between flex text-sm">
        © {new Date().getFullYear()} Lee Yan Ho Samuel. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
