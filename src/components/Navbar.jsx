import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-5 items-center bg-orange-100 text-2xl sm:text-3xl">
      <div className="engrave flex gap-5 justify-center">
        <Link to="/">
          <div className="pb-5">Home</div>
        </Link>
        <Link to="/about">
          <div className="pb-5">About</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
