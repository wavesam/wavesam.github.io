import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="z-10 sticky top-0 px-[10%] py-5 justify-between flex text-2xl bg-black text-white">
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
