import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white py-4 shadow-md z-20">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to='/' className="text-3xl font-tacOne hover:text-green-500 hover:scale-110 transition duration-500">FITrack</Link>
        <div className="hidden md:flex items-center space-x-12 text-black font-teko text-xl">
          <Link to='/' className="nav-link" >Home</Link>
          <Link to='#about' className="nav-link">About</Link>
          <Link to='#contact' className="nav-link">Contact</Link>
          <Link to='#exercises' className="hidden md:flex btn-black text-lg">Get Started</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;