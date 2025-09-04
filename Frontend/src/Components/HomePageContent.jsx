import React from "react";
import { motion } from "framer-motion";
import { jumpVariant, fadeLeft, fadeRight } from "../animation.js"; 
import "../styles/HomePageContent.css";

const HomePageContent = () => {
  return (
    <div className="homepage-wrapper">

      {/* 1️⃣ HERO BANNER */}
      <section className="banner-wrapper">
        {/* Left Content */}
        <motion.div 
          className="banner-content"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="banner-title">🌟 Why Businesses Choose Us</h2>
          <p className="banner-subtitle">
            We deliver fast, secure, and ROI-focused solutions — while building long-term partnerships.  
          </p>

          <div className="banner-points">
            {[
              { icon: "🚀", text: "Fast Delivery" },
              { icon: "🛡", text: "Secure & Reliable" },
              { icon: "🎯", text: "ROI-Focused" },
              { icon: "🤝", text: "Long-Term Partnership" }
            ].map((point, i) => (
              <motion.div 
                key={i} 
                className="banner-point" 
                variants={jumpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="point-icon">{point.icon}</span>
                <span>{point.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="banner-image"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src="/Micro/FastDelivery.webp" alt="Business Growth" />
        </motion.div>
      </section>

      {/* 2️⃣ HOW WE WORK (Consultation steps) */}
      <section className="process-wrapper">
        <motion.h2 
          className="section-title"
          variants={jumpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          🛠 How We Work
        </motion.h2>
        
        <div className="process-grid">
          {[
            { icon: "📞", title: "Consultation", desc: "Understanding your goals to set a strong foundation." },
            { icon: "📝", title: "Planning", desc: "Creating a clear strategy & roadmap for execution." },
            { icon: "💻", title: "Design & Development", desc: "Crafting your project using cutting-edge tools." },
            { icon: "🚀", title: "Launch & Support", desc: "Launching with care & providing ongoing support." }
          ].map((step, i) => (
            <motion.div
              key={i}
              className="process-card"
              variants={i % 2 === 0 ? fadeLeft : fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="process-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3️⃣ CTA FINAL BANNER */}
      <motion.section
        className="cta-banner"
        variants={jumpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>🚀 Let’s Build Something Great Together</h2>
        <p>Your growth is our priority — let's start your journey today.</p>
        <a href="#contact" className="cta-btn">Get a Free Quote</a>
      </motion.section>
    </div>
  );
};

export default HomePageContent;
