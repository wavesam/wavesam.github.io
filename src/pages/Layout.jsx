import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="w-full bg-[url('https://i.redd.it/upkutkfhobde1.png')] bg-cover bg-fixed">
      <div className="z-10 sticky top-0 animate-fadeInDown">
        <Navbar />
      </div>

      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
