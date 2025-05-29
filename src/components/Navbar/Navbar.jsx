import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import BtnPrimary from "../BtnPrimary";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Memoize menu items so this array isn't recreated on every render
  const menuItems = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Skills", path: "/skills" },
      { name: "Experience", path: "/experience" },
      { name: "Projects", path: "/projects" },
      { name: "Contact", path: "/contact" },
    ],
    []
  );

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f5f5f5] shadow-md font-montserrat">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-3xl md:text-4xl font-bold italic text-primary logo-font"
          aria-label="Site Logo"
        >
          Sachin Singh
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center justify-center">
          {menuItems.map(({ name, path }) => (
            <Link key={name} to={path} className="nav-3d-link">
              <span className="link-text primary">{name}</span>
              <span className="link-text secondary">{name}</span>
            </Link>
          ))}
          <BtnPrimary text="Resume" to="/SachinSingh.pdf" download />
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            className="w-7 h-7 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden bg-[#f5f5f5] border border-gray-300 transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4 rounded-b-lg" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6">
          {menuItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="text-lg text-primary relative hover:text-blue-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
          <BtnPrimary text="Resume" to="/SachinSingh.pdf" download />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
