import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-5 items-center bg-orange-100 text-3xl sm:text-4xl">
      <div className="engrave flex gap-5">
        <Link to="/">
          <div className="pb-5">Home</div>
        </Link>
        <Link to="/about">
          <div className="pb-5">About</div>
        </Link>
        <Link to="/projects">
          <div className="pb-5">Projects</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
