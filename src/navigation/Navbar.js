import React from 'react';
import './Navbar.css';
import NavbarTop from './NavbarTop.js';
import NavbarBottom from './NavbarBottom.js';

function Navbar() {

  return(
    <section className='container'>
      <NavbarTop />
      <NavbarBottom />
    </section>
  )
}

export default Navbar;
