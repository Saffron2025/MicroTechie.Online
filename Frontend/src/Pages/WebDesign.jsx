import React from "react";
import { FaPalette, FaRegSmile, FaLayerGroup, FaMobileAlt } from "react-icons/fa";
import '../styles/ServicePage.css'

const WebDesign = () => {
  return (
    <section className="service-page">
      {/* Hero */}
      <header className="service-hero">
        <h1><FaPalette /> Web Designing</h1>
        <p>Modern, stunning UI/UX that makes users fall in love with your brand.</p>
      </header>

      {/* Features */}
      <div className="service-content">
        <h2>What We Offer</h2>
        <ul>
          <li>🎨 Brand-focused design systems</li>
          <li>📱 Responsive & mobile-first layouts</li>
          <li>✨ Smooth animations & interactions</li>
          <li>🖌 Custom illustrations & icons</li>
        </ul>
      </div>

      {/* Perks */}
      <div className="perks">
        <div><FaRegSmile /> User-Friendly</div>
        <div><FaLayerGroup /> Clean UI</div>
        <div><FaMobileAlt /> Mobile Optimized</div>
      </div>

      {/* CTA */}
      <div className="cta-row">
        <a href="/contact" className="cta-solid">Let’s Design Together</a>
      </div>
    </section>
  );
};

export default WebDesign;
