import React from "react";
import { FaHome } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import { MdContactMail } from "react-icons/md";
import { PiFlowerLotusBold } from "react-icons/pi";
import { Link, NavLink } from "react-router";
import cartImg from "../../assets/shopping-cart.png";


const Navbar = () => {
  const navClass = ({ isActive }) =>
    isActive
      ? "text-rose-500 font-semibold border-b-2 border-rose-500"
      : "text-gray-700 hover:text-rose-500";

  const NavLinks = (
    <>
      <li>
        <NavLink to="/" end className={navClass}>
          <FaHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allFlowers" className={navClass}>
          <PiFlowerLotusBold /> Flowers
        </NavLink>
      </li>
      <li>
        <NavLink to="/shop" className={navClass}>
          <FaShop /> Shop
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={navClass}>
          <MdContactMail /> Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-md px-4 sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto ">
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
              Flowers<span className="text-rose-500">Shop</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4">{NavLinks}</ul>
        </div>

        {/* nav-end button */}
        <div className="navbar-end">
          {/* <Link to="/cart">
            <img src={cartImg} alt="cart" className="w-6 mr-2 md:w-8 md:mr-4"/>
          </Link> */}

          {/* cart in daisy ui */}
          <div className="dropdown dropdown-end mr-2 md:mr-4 ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-primary">Subtotal: $999</span>
          <div className="card-actions">
            <Link to="/cart" className="btn border border-rose-500 hover:bg-rose-600 hover:text-white btn-block">View cart</Link>
          </div>
        </div>
      </div>
    </div>

          {/* login btn */}
          <Link
            to="/login"
            className="btn bg-rose-500 hover:bg-rose-600 btn-xs md:btn-md md:px-5 text-white"
          >
            <FiLogIn /> Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
