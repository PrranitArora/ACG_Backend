import React from 'react';
import logo from './apex_bw.png';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#">
          <img src={logo} alt="ACG" className="brand-logo" />
          <span className="brand-title">Apex College Guidance</span>
        </a>
        <nav className="nav">
          <a href="#features">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
