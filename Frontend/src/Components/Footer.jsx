import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        
        {/* Brand Info */}
        <div className="footer-brand">
          <img src="/Micro/MicroTechieLogo.png" alt="" />
          <p>Building innovative solutions for tomorrow’s challenges — today.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-links">
          <h3>Services</h3>
          <ul>
            <li><a href="/web-development">Web Development</a></li>
            <li><a href="/web-design">Web Designing</a></li>
            <li><a href="/digital-marketing">Digital Marketing</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: hello@startup.com</p>
          <p>Phone: +91 98765 43210</p>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} StartupName. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
