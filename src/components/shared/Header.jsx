import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>All Toys</a>
      </li>
      {/* <li>
        <a>My Toys</a>
      </li>
      <li>
        <a>Add a Toy</a>
      </li> */}
      <li>
        <a>Blogs</a>
      </li>
    </>
  );

  return (
    <div>
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-medium"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center">
              <img src="/logo.png" className="h-20 w-20" alt="" />
              <h3 className="text-5xl font-semibold hover:bg-base-300 hover:rounded-xl p-3">
                Toy Galaxy
              </h3>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn btn-warning">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
