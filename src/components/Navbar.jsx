import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section>
      <Link to='/'>
        FITrack
      </Link>
    </section>
  );
}

export default Navbar;