import React from "react";
import "../styles/WebOffer.css";

const WebOffer = () => {
  return (
    <div className="offer-wrapper">

      {/* BACKGROUND VIDEO */}
      <div className="video-container">
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src="/Micro/WebOffer.mp4" type="video/mp4" />
        </video>
        <div className="gradient-overlay" />
      </div>

      {/* HERO */}
      <section className="hero-new">
        <span className="badge-new">Trusted Business Website Solution</span>

        <h1>
          A Website That <br />
          <span className="text-gradient">People Remember</span>
        </h1>

        <div className="price-tag">Starting at $199</div>

        <p className="hero-sub">
          Simple, beautiful and trustworthy websites –  
          even if you are not good with technology.
        </p>

        <div className="features-grid-mini">
          <span>✔ Easy to read & use</span>
          <span>✔ 1 Year full support</span>
          <span>✔ No hidden charges</span>
        </div>

        <a href="tel:+91XXXXXXXXXX" className="cta-btn">
          Call for Free Consultation
        </a>

        <p className="offer-note">Talk to a real human. No pressure.</p>

        {/* HERO IMAGES */}
        <div className="hero-images">
          {/* <img src="/Micro/Slider1.webp" alt="Design" /> */}
          {/* <img src="/Micro/Slider2.webp" alt="Speed" /> */}
          {/* <img src="/Micro/Slider3.webp" alt="SEO" /> */}
        </div>
      </section>

      {/* IMAGE SERVICES */}
      <section className="section">
        <h2 className="section-title">What We Build For You</h2>

        <div className="image-cards">
          <div className="image-card">
            <img src="/Micro/Slider1.webp" />
            <h3>Clean & Modern Design</h3>
            <p>Looks professional and easy on the eyes.</p>
          </div>

          <div className="image-card">
            <img src="/Micro/Slider2.webp" />
            <h3>Fast & Smooth Website</h3>
            <p>Loads quickly on mobile and desktop.</p>
          </div>

          <div className="image-card">
            <img src="/Micro/Slider3.webp" />
            <h3>Search Engine Ready</h3>
            <p>Helps customers find you online.</p>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section">
        <div className="trust-box">
          <h2 className="section-title">Why People Trust Us</h2>
          <div className="trust-stats">
            <div><h4>100+</h4><p>Businesses Helped</p></div>
            <div><h4>99%</h4><p>Satisfaction</p></div>
            <div><h4>24h</h4><p>Support Response</p></div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="final-box">
          <h2>Let’s Talk</h2>
          <p>
            Not sure? Just call us.  
            We explain everything in simple words.
          </p>
          <a href="tel:+91XXXXXXXXXX" className="cta-btn">
            Call Now
          </a>
        </div>
      </section>

      <a href="tel:+91XXXXXXXXXX" className="mobile-only-sticky">
        📞 Call Now – Free Advice
      </a>

    </div>
  );
};

export default WebOffer;
