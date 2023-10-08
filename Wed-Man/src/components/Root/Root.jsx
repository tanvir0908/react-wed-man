import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Root() {
  return (
    <div className="mx-5 md:mx-10 lg:mx-16">
      <Navbar />
      <Outlet />
    </div>
  );
}
