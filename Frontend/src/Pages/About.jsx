import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">🚀 Turning Ideas Into Digital Reality</h2>
        <p className="about-subtitle">
          We are not just another IT company — we are a passionate, innovation-driven
          startup dedicated to helping businesses grow in the digital world.  
          Our mission is simple: <strong>to transform your ideas into high-performing, impactful
          digital solutions</strong> that deliver measurable results.
        </p>
        <p className="about-description">
          Founded with a vision to empower startups, small businesses, and enterprises,
          we offer a full spectrum of services — from **custom web development** and
          **creative web design** to **strategic digital marketing**.  
          We believe in building long-term partnerships by delivering excellence, 
          speed, and innovation in everything we do.
        </p>
        <p className="about-description">
          At the heart of our process lies **collaboration**. We work closely with our
          clients to understand their goals, challenges, and audience. Our agile approach
          allows us to adapt quickly, ensuring that every project is delivered on time,
          on budget, and beyond expectations.  
          From **e-commerce platforms** and **portfolio websites** to **social media automation tools** 
          and **branding strategies**, we have the expertise to make your vision a reality.
        </p>

        {/* Key Values */}
        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">💡</div>
            <h3>Innovation</h3>
            <p>
              We embrace emerging technologies to create future-ready solutions that help
              your business stay ahead in the competitive market.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">⚡</div>
            <h3>Speed & Efficiency</h3>
            <p>
              We deliver projects fast without sacrificing quality, using optimized
              workflows and modern development practices.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">🤝</div>
            <h3>True Partnership</h3>
            <p>
              We see ourselves as your growth partner — your success is our success, and
              we go the extra mile to make it happen.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">🌍</div>
            <h3>Global Vision</h3>
            <p>
              Whether you’re a local startup or a global enterprise, our scalable solutions
              are designed to grow with your ambitions.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <p className="about-closing">
          In a rapidly evolving digital era, having the right partner can be the
          difference between blending in and standing out.  
          <strong>We’re here to make sure your brand doesn’t just survive — it thrives.</strong>
        </p>
      </div>
    </section>
  );
};

export default About;
