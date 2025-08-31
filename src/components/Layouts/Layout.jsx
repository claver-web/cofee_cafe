import { Outlet } from "react-router-dom";
import Navbar from "../ConstentComponent/Navbar";
import Footer from "../ConstentComponent/FooterContent";

const Layout = () => {
  return (
    <>
      <Navbar />
        <main>
          <Outlet /> {/* This is where the page content changes */}
        </main>
      <Footer />
    </>
  );
};

export default Layout;
