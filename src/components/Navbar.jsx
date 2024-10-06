import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section>
      <Link to='/' className="font-tacOne text-3xl">
        FITrack
      </Link>
    </section>
  );
}

export default Navbar;