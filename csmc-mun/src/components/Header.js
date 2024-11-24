import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../images/csmc-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Brand Logo" className="h-10 w-10" />
          <span className="text-lg font-bold">CAUSMIC MUN</span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/about-us"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/partners"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Partners
              </Link>
            </li>
            <li>
              <Link
                to="/preparation-resources"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Preparation & Resources
              </Link>
            </li>
            <li>
              <Link
                to="/committees"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Committees
              </Link>
            </li>
            
            <li>
              <Link
                to="/resolutions"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Resolutions
              </Link>
            </li>
            <li>
              <Link
                to="/registration"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Registration
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-800 py-4`}
      >
        <ul className="space-y-4 px-6">
          <li>
            <Link
              to="/about-us"
              className="hover:text-yellow-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/partners"
              className="hover:text-yellow-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Partners & Resources
            </Link>
          </li>
          <li>
            <Link
              to="/preparation-resources"
              className="hover:text-yellow-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Preparation & Resources
            </Link>
          </li>
          <li>
            <Link
              to="/committees"
              className="hover:text-yellow-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Committees
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="hover:text-yellow-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/resolutions"
              className="hover:text-yellow-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Resolutions
            </Link>
          </li>
          <li>
            <Link
              to="/registration"
              className="hover:text-yellow-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Registration
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
