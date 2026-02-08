import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <img
              src="https://i.ibb.co/vx12Pktr/flower-logo2-removebg-preview.png"
              alt="logo"
              className="w-10 h-10"
            />
            <span>
              Flowers<span className="text-rose-600">Shop</span>
            </span>
          </Link>

          <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs">
            Bringing you fresh, beautiful flowers for every special moment.
            Handpicked blooms, fast delivery, and heartfelt smiles guaranteed.
          </p>

          <div className="flex gap-3 mt-5">
            <a className="footer-icon">
              <FaFacebookF />
            </a>
            <a className="footer-icon">
              <FaInstagram />
            </a>
            <a className="footer-icon">
              <FaTwitter />
            </a>
            <a className="footer-icon">
              <FaPinterestP />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="footer-link">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="footer-link">FAQ</li>
            <li className="footer-link">Shipping & Delivery</li>
            <li className="footer-link">Return Policy</li>
            <li className="footer-link">Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to get special offers and flower care tips delivered to
            your inbox!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l-md border border-rose-200 focus:outline-none"
            />
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 rounded-r-md transition">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-gray-400 border-t border-rose-200 py-4 text-center text-sm">
        © {new Date().getFullYear()} FlowersShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
