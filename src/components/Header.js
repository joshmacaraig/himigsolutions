import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-neutral-dark hover:text-primary font-medium">
            Home
          </Link>
          <Link to="/services" className="text-neutral-dark hover:text-primary font-medium">
            Services
          </Link>
          <Link to="/portfolio" className="text-neutral-dark hover:text-primary font-medium">
            Portfolio
          </Link>
          <Link to="/contact" className="text-neutral-dark hover:text-primary font-medium">
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-neutral-dark focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
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

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-neutral-dark hover:text-primary font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-neutral-dark hover:text-primary font-medium"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-neutral-dark hover:text-primary font-medium"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="text-neutral-dark hover:text-primary font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;