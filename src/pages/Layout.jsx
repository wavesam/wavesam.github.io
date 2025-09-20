import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="w-full min-h-screen bg-blue-900">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
