import { Link } from "react-router-dom";
import SocialMediaIcons from "./SocialMediaIcons";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      className="px-[20px] sm:px-[10%] py-3 justify-between flex text-2xl bg-black text-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/">
        <strong>🌊 Samuel Lee</strong>
      </Link>

      <SocialMediaIcons />
    </motion.div>
  );
};

export default Navbar;
