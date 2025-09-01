import React from "react";
import { FaLaptopCode, FaRocket, FaShieldAlt, FaMobileAlt } from "react-icons/fa";
import '../styles/ServicePage.css'

const WebDevelopment = () => {
  return (
    <section className="service-page">
      {/* Hero */}
      <header className="service-hero">
        <h1><FaLaptopCode /> Web Development</h1>
        <p>Secure, scalable, and blazing-fast websites & apps to power your business growth.</p>
      </header>

      {/* Features */}
      <div className="service-content">
        <h2>What We Offer</h2>
        <ul>
          <li>⚡ Next.js / React modern stack</li>
          <li>🔒 Secure authentication & APIs</li>
          <li>🚀 SEO & performance optimized</li>
          <li>🛒 eCommerce & dashboards</li>
        </ul>
      </div>

      {/* Perks */}
      <div className="perks">
        <div><FaRocket /> Fast Delivery</div>
        <div><FaShieldAlt /> Secure</div>
        <div><FaMobileAlt /> Mobile-First</div>
      </div>

      {/* CTA */}
      <div className="cta-row">
        <a href="/contact" className="cta-solid">Get a Free Quote</a>
      </div>
    </section>
  );
};

export default WebDevelopment;
