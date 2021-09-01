import React from 'react';
import './NavbarTop.css';
import Logo from './Logo';

function NavbarTop() {

  return(
    <div className='topContainer'>
      <Logo />
      <div className='accountButtons'>
        <div className='login'>
          <p>Login</p>
        </div>
        <div className='signUp'>
          <p>SignUp</p>
        </div>
      </div>

    </div>
  )
}

export default NavbarTop;
