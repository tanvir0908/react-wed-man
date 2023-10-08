import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const navLinks = (
    <>
      <li>
        <NavLink className="text-lg font-medium" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-medium" to={"/about"}>
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60"
            >
              {navLinks}
            </ul>
          </div>
          <Link className="w-40">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link
            className="btn normal-case px-10 text-lg bg-[#FF69B4] hover:bg-[#FF69B4] text-white hover:text-black"
            to={"/login"}
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
