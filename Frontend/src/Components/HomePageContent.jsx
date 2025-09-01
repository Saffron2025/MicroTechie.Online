import React from "react";
import "../styles/HomePageContent.css";

const HomePageContent = () => {
  return (
    <>
      {/* 1️⃣ WHY CHOOSE US */}
      <section className="why-choose-us">
        <h2 className="section-title">🌟 Why Businesses Choose Us</h2>
        <div className="trust-points">
          {[
            { icon: "🚀", title: "Fast Delivery", desc: "Projects delivered quickly without compromising quality." },
            { icon: "🛡", title: "Secure & Reliable", desc: "Security-first approach to keep your website safe." },
            { icon: "🎯", title: "ROI-Focused", desc: "Every decision maximizes your return on investment." },
            { icon: "🤝", title: "Long-Term Partnership", desc: "We build lasting relationships for growth." }
          ].map((point, i) => (
            <div className="trust-card" key={i}>
              <span className="trust-icon">{point.icon}</span>
              <h3>{point.title}</h3>
              <p>{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2️⃣ HOW WE WORK */}
      <section className="how-we-work">
        <h2 className="section-title">🛠 How We Work</h2>
        <div className="process-timeline">
          {[
            { icon: "📞", title: "Consultation", desc: "Understanding your goals to set a strong foundation." },
            { icon: "📝", title: "Planning", desc: "Creating a clear strategy & roadmap for execution." },
            { icon: "💻", title: "Design & Development", desc: "Crafting your project using cutting-edge tools." },
            { icon: "🚀", title: "Launch & Support", desc: "Launching with care & providing ongoing support." }
          ].map((step, i) => (
            <div
              className={`process-step ${i % 2 === 0 ? "left" : "right"}`}
              key={i}
            >
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3️⃣ CTA BANNER */}
      <section className="cta-banner">
        <h2>🚀 Let’s Build Something Great Together</h2>
        <p>Your growth is our priority — let's start your journey today.</p>
        <a href="#contact" className="cta-btn">Get a Free Quote</a>
      </section>
    </>
  );
};

export default HomePageContent;
