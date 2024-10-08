import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="top-0 w-full bg-white py-4 z-20 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
            <Link to="/" className="text-3xl lg:text-4xl font-tacOne">FITrack</Link>
            <ul className="hidden md:flex space-x-12 text-black font-teko text-xl">
                <li><Link to="/" className="hover:text-green-500">Home</Link></li>
                <li><Link to="/app" className="hover:text-green-500">App</Link></li>
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
