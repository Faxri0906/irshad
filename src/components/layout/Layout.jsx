import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Round from "../Round/Round";
const Layout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Round />
        <Footer />
    </>
  );
};

export default Layout;