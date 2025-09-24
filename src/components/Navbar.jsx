import { Link } from "react-router-dom";
import SocialMediaIcons from "./SocialMediaIcons";

const Navbar = () => {
  return (
    <div className="px-[10%] py-3 justify-between flex text-2xl bg-black text-white">
      <Link to="/">
        <strong>🌊 Samuel Lee</strong>
      </Link>

      <SocialMediaIcons />
    </div>
  );
};

export default Navbar;
