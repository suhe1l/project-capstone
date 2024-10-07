import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white py-4 z-20 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
            <div className="text-3xl font-tacOne">FITrack</div>
            <ul className="hidden md:flex space-x-12 text-black font-teko text-xl">
                <li><a href="#home" className="hover:text-green-500">Home</a></li>
                <li><a href="#about" className="hover:text-green-500">About Us</a></li>
                <li><a href="#services" className="hover:text-green-500">Services</a></li>
            </ul>
            <div className="hidden md:flex">
                <Link to="/app" className="btn-black">
                    Get Started
                </Link>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
