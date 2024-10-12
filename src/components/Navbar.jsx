import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="top-0 w-full bg-white py-4 z-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link to="/" className="text-3xl lg:text-4xl font-tacOne">FITrack</Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className={`md:flex space-x-12 text-black font-teko text-xl ${isOpen ? 'hidden' : 'md:block'}`}>
          <li><Link to="/" className="hover:text-green-500">Home</Link></li>
          <li><Link to="/app" className="hover:text-green-500">App</Link></li>
        </ul>

        {/* Desktop "Get Started" Button */}
        <div className={`hidden md:flex ${isOpen ? 'hidden' : ''}`}>
          <Link to="/app" className="btn-black">Get Started</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md pb-5">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="my-1"><Link to="/" className="font-oswald hover:scale-110 transition duration-500 my-1">Home</Link></li>
            <li className="pb-3"><Link to="/app" className="font-oswald transition duration-500 hover:text-green-500">App</Link></li>
            <li><Link to="/app" className="btn-black">Get Started</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
