import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <section id='footer'>
      <div className="bg-black w-full pt-10 px-10">
        <div className="flex flex-col md:flex-row items-center lg:flex-row md:justify-between lg:justify-between m-auto mb-10 px-10">
          <Link to="/" className="text-4xl text-white md:text-6xl lg:text-7xl font-tacOne hover:text-green-500">FITrack</Link>
          <ul className="flex flex-row mt-2 md:flex-col lg:flex-col lg:content-center lg-mr-10">
            <li><Link to="/" className="nav-link flex text-2xl text-white">Home</Link></li>
            <li><Link to="/app" className="nav-link flex text-2xl text-white">App</Link></li>
          </ul>
        </div>

        <hr className="text-white" />

        <div className="container mx-auto flex justify-center space-x-6 text-white my-10">
          <a 
            href="mailto:suheilmohammed.ke@gmail.com" 
            className="flex items-center transition-transform duration-500 hover:scale-110 hover:text-green-500"
            aria-label="Email"
          >
            <FaEnvelope size={40} />
          </a>
          <a 
            href="https://github.com/suhe1l" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center transition-transform duration-300 hover:scale-110 hover:text-green-500"
            aria-label="GitHub"
          >
            <FaGithub size={38} />
          </a>
        </div>
        <p className="text-center mt-4 text-sm">
          &copy; {new Date().getFullYear()} FITrack. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;