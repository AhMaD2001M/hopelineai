import React, { useState } from "react";
import logo from "../images/logo2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-green-300 top-0 left-0 fixed right-0 z-40  ">
      <div className="container  mx-auto px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-10 sm:h-20 lg:h-35 w-100" // Adjust size as needed
        />

        {/* Desktop Navbar Links */}
        <nav className="hidden lg:flex space-x-8 text-black uppercase font-semibold text-md">
          <a
            href="/"
            className="py-2 px-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-900"
          >
            Home
          </a>
          <a
            href="/consultancy"
            className="py-2 px-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-400"
          >
            Live Consultancy
          </a>
          <a
            href="/campaigns"
            className="py-2 px-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-400"
          >
            Awareness Campaigns
          </a>
          <a
            href="/rehabilitation"
            className="py-2 px-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-400"
          >
            Rehabilitation
          </a>
          <a
            href="/contactus"
            className="py-2 px-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-400"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={handleToggleMenu}
            className="flex flex-col space-y-2"
            aria-label="Toggle Navigation"
          >
            <span className="w-6 h-1 bg-white"></span>
            <span className="w-6 h-1 bg-white"></span>
            <span className="w-6 h-1 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-gray-800 w-full ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col items-center py-4">
          <a
            href="/"
            className="py-2 px-6 w-full text-center text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
          >
            Home
          </a>
          <a
            href="/consultancy"
            className="py-2 px-6 w-full text-center text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
          >
            Live Consultancy
          </a>
          <a
            href="/campaigns"
            className="py-2 px-6 w-full text-center text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
          >
            Awareness Campaigns
          </a>
          <a
            href="/rehabilitation"
            className="py-2 px-6 w-full text-center text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-geay-400"
            onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
          >
            Rehabilitation
          </a>
          <a
            href="/contactUs"
            className="py-2 px-6 w-full text-center text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-geay-400"
            onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
