import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-[10%] py-5 justify-between flex text-3xl bg-black text-white">
      <Link to="/">🌊 wavesam</Link>
      {/*
      <div className="flex gap-5">
        <Link to="/about">
          <div>About</div>
        </Link>
      </div>
      */}
    </div>
  );
};

export default Navbar;
