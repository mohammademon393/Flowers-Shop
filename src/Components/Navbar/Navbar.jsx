import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navClass = ({ isActive }) =>
    isActive
      ? "text-pink-600 font-semibold border-b-2 border-pink-500"
      : "text-gray-700 hover:text-pink-500";

  const NavLinks = (
    <>
      <li>
        <NavLink to="/" end className={navClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/flowers" className={navClass}>
          Flowers
        </NavLink>
      </li>
      <li>
        <NavLink to="/shop" className={navClass}>
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={navClass}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={navClass}>
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-md px-4 sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu */}
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-1 shadow bg-base-100 rounded-box w-44 space-y-1"
            >
              {NavLinks}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <img
              className="w-10 h-10 rounded-full"
              src="https://i.ibb.co/vx12Pktr/flower-logo2-removebg-preview.png"
              alt="Flower Shop Logo"
            />
            <span>
              Flowers<span className="text-pink-600">Shop</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal gap-4">{NavLinks}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
