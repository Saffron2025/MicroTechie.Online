import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <nav className={`agency-navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="nav-logo">
        <Link to="/">
          <img src="/Micro/MicroTechieLogo.png" alt="Logo" className="logo-img" />
        </Link>
      </div>

      {/* Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><NavLink to="/" end>Home</NavLink></li>

        {/* Services */}
        <li className={`dropdown ${activeDropdown === "services" ? "active" : ""}`}>
          <span onClick={() => toggleDropdown("services")}>
            Services <FaChevronDown className="chevron" />
          </span>
          <ul className="dropdown-menu">
            <li><NavLink to="/digital-marketing">Digital Marketing</NavLink></li>
            <li><NavLink to="/web-development">Web Development</NavLink></li>
            <li><NavLink to="/web-design">Web Design</NavLink></li>
          </ul>
        </li>

        {/* Pricing */}
        <li className={`dropdown ${activeDropdown === "pricing" ? "active" : ""}`}>
          <span onClick={() => toggleDropdown("pricing")}>
            Pricing <FaChevronDown className="chevron" />
          </span>
          <ul className="dropdown-menu">
            <li><NavLink to="/WebDevelopmentPricing">Web Development</NavLink></li>
            <li><NavLink to="/DigitalMarketingPricing">Digital Marketing</NavLink></li>
            <li><NavLink to="/WebDesignPricing">Web Designing</NavLink></li>
          </ul>
        </li>

        <li><NavLink to="/Innovations">Innovations</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact" className="cta-btn">Get Quote</NavLink></li>
      </ul>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
      </div>

      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
};

export default Navbar;
