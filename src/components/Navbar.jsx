import { Link } from "react-router-dom";
import SocialMediaIcons from "./SocialMediaIcons";

const Navbar = () => {
  return (
    <div className="px-[10%] py-5 justify-between flex text-2xl bg-black text-white font-mono">
      <Link to="/">🌊 wavesam.io</Link>

      <SocialMediaIcons />
    </div>
  );
};

export default Navbar;
