import React from "react";
import { FaBullhorn, FaChartLine, FaUsers, FaSearch } from "react-icons/fa";
import '../styles/ServicePage.css'

const DigitalMarketing = () => {
  return (
    <section className="service-page">
      {/* Hero */}
      <header className="service-hero">
        <h1><FaBullhorn /> Digital Marketing</h1>
        <p>ROI-driven campaigns to boost your visibility, traffic, and revenue.</p>
      </header>

      {/* Features */}
      <div className="service-content">
        <h2>What We Offer</h2>
        <ul>
          <li>🔍 SEO (on-page, technical, content)</li>
          <li>📢 Social media marketing</li>
          <li>🎯 Performance ads (Google/Meta)</li>
          <li>📊 Analytics & conversion optimization</li>
        </ul>
      </div>

      {/* Perks */}
      <div className="perks">
        <div><FaChartLine /> Data-Driven</div>
        <div><FaUsers /> Audience Targeted</div>
        <div><FaSearch /> Search Optimized</div>
      </div>

      {/* CTA */}
      <div className="cta-row">
        <a href="/contact" className="cta-solid">Grow Your Business</a>
      </div>
    </section>
  );
};

export default DigitalMarketing;
