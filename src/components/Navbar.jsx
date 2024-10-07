import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section>
      <div className="flex justify-between m-auto shadow-md">
        <Link to='/' className="text-center content-center font-tacOne text-3xl m-6 hover:scale-110 transition duration-500">FITrack</Link>
        <div className="m-6 flex flex-row items-center">
          <Link to='/' className="nav-link mx-10" >Home</Link>
          <Link to='#about' className="nav-link mx-10">About</Link>
          <Link to='#contact' className="nav-link mx-10">Contact</Link>
          <Link className="btn-black mx-8">Get Started</Link>
        </div>
      </div>
    </section>
  );
}

export default Navbar;