import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("microUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <nav className="agency-navbar">
      {/* Logo */}
      <div className="nav-logo">
        <Link to="/" className="logo-link">
          <img 
            src="/Micro/MicroTechieLogo.png"
            alt="PixelWave Agency Logo" 
            className="logo-img"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><NavLink to="/" end>Home</NavLink></li>

        {/* Services Dropdown */}
        <li className="dropdown">
          <span>Services ▾</span>
          <ul className="dropdown-menu">
            <li><NavLink to="/digital-marketing">Digital Marketing</NavLink></li>
            <li><NavLink to="/web-development">Web Development</NavLink></li>
            <li><NavLink to="/web-design">Web Design</NavLink></li>
          </ul>
        </li>

        <li className="dropdown">
  <span>Pricing ▾</span>
  <ul className="dropdown-menu">
    <li><NavLink to="/WebDevelopmentPricing">Web Development</NavLink></li>
    <li><NavLink to="/DigitalMarketingPricing">Digital Marketing</NavLink></li>
    <li><NavLink to="/WebDesignPricing">Web Designing</NavLink></li>
  </ul>
</li>

        <li><NavLink to="/Innovations">Innovations</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>



{/* <li><NavLink to="/admin-login">Admin Login</NavLink></li> */}

<li>
  <NavLink to="/contact" className="cta-btn">
    Get Quote
  </NavLink>
</li>


      </ul>

      {/* Mobile Menu Toggle */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
