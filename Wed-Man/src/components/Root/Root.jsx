import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Root() {
  return (
    <div className="mx-5 md:mx-10 lg:mx-16">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
