import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="w-full min-h-screen bg-[url('https://i.redd.it/upkutkfhobde1.png')] bg-cover bg-fixed">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
