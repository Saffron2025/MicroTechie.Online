import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';
import { Link } from "react-router-dom";
import HomeServicesHighlight from './HomeServicesHighlight';

const Hero = () => {
  const imgRef = useRef(null);

  // Scroll reveal for image
  useEffect(() => {
    const el = imgRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible');
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero-section">
        {/* Animated Background Shapes */}
        <div className="animated-shape shape1"></div>
        <div className="animated-shape shape2"></div>
        <div className="animated-shape shape3"></div>

        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            🚀 Build, Design & Grow <br /> Your Digital Presence
          </h1>
          <p className="hero-subtitle">
            We provide premium <strong>Web Development</strong>, 
            <strong> Web Designing</strong>, and 
            <strong> Digital Marketing</strong> 
               <p> solutions to help your business shine online.</p>
          </p>

          {/* Service Badges */}
          <div className="service-badges">
  <Link to="/web-development">💻 Web Development</Link>
  <Link to="/web-design">🎨 Web Designing</Link>
  <Link to="/digital-marketing">📈 Digital Marketing</Link>
</div>

          {/* CTA Buttons */}
          <div className="hero-buttons">
         <Link to="/OurServices" className="btn-primary pro-btn">
  🚀 Our Services
</Link>
<Link to="/contact" className="btn-secondary pro-btn">
  💬 Get a Quote
</Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image" ref={imgRef}>
          <img src="/Micro/HeroImage.png" alt="Agency Services" />
        </div>
      </section>

      <HomeServicesHighlight />
    </>
  );
};

export default Hero;
