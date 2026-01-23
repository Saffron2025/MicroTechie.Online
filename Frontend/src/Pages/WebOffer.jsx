import React, { useEffect, useRef } from "react";
import "../styles/WebOffer.css";

const WebOffer = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.scroll-animate').forEach(el => observerRef.current.observe(el));
    return () => observerRef.current.disconnect();
  }, []);

  const handleCallClick = () => {
    const randomNum = `+91 ${Math.floor(Math.random() * 90000) + 10000}-${Math.floor(Math.random() * 90000) + 10000}`;
    alert(`📞 Connecting to Digital Architect...\n\nAssigned Number: ${randomNum}\n\nPlease stay on the line!`);
  };

  return (
    <div className="offer-wrapper">
      {/* 1. FLOATING BUTTONS */}
      <div className="floating-actions">
        <a href="https://wa.me/yournumber" target="_blank" rel="noreferrer" className="float-btn float-whatsapp">
          <span style={{fontSize: '30px', fontWeight: 'bold'}}>W</span>
        </a>
        <button onClick={handleCallClick} className="float-btn float-call">
          <span style={{fontSize: '25px', fontWeight: 'bold'}}>C</span>
        </button>
      </div>

      {/* 2. BACKGROUND VIDEO */}
      <div className="video-container">
        <video className="bg-video" autoPlay loop muted playsInline preload="auto">
          <source src="/Micro/WebOffer.mp4" type="video/mp4" />
        </video>
        <div className="gradient-overlay" />
      </div>

      {/* 3. HERO SECTION */}
      <section className="hero-new scroll-animate">
        <div style={{border: '1px solid var(--accent)', padding: '5px 20px', borderRadius: '50px', marginBottom: '20px', fontSize: '0.8rem', letterSpacing: '2px'}}>
            GLOBAL AGENCY STANDARDS
        </div>
        <h1>Build Your <br/> <span style={{color: 'var(--accent)'}}>Legacy Online.</span></h1>
        <p className="hero-sub">
          Premium web architecture for businesses that demand excellence. 
          Blazing fast, secure, and globally optimized. Starting at <b>$199</b>.
        </p>
        <button onClick={handleCallClick} className="cta-btn">BOOK STRATEGY CALL</button>
      </section>

      {/* 4. TRUST BAR */}
      <div className="section scroll-animate" style={{marginTop: '-60px', opacity: 0.5, textAlign: 'center'}}>
        <p style={{marginBottom: '20px', letterSpacing: '2px', fontSize: '0.7rem'}}>TRUSTED BY INNOVATORS WORLDWIDE</p>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', fontSize: '1.2rem', fontWeight: 'bold'}}>
          <span>FORBES</span> <span>WIRED</span> <span>TECHCRUNCH</span> <span>NY TIMES</span>
        </div>
      </div>

      {/* 5. PORTFOLIO GRID */}
      <section className="section">
        <h2 className="section-title scroll-animate">Global Solutions</h2>
        <div className="image-grid-3">
          {[
            { img: "/Micro/Slider1.webp", t: "Enterprise SaaS", d: "Scalable data-driven systems." },
            { img: "/Micro/Slider2.webp", t: "Luxury E-Com", d: "High-end shopping experiences." },
            { img: "/Micro/Slider3.webp", t: "Elite Branding", d: "Digital presence for world leaders." }
          ].map((item, i) => (
            <div key={i} className="image-card scroll-animate">
              <img src={item.img} alt={item.t} />
              <div className="image-card-content">
                <h3>{item.t}</h3>
                <p style={{opacity: 0.8}}>{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. OUR PROCESS TIMELINE */}
      <section className="section scroll-animate">
        <h2 className="section-title">Our 4-Step Process</h2>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          {[
            { t: "Deep Strategy", d: "Analyzing your market and building a roadmap for success." },
            { t: "Custom Architecture", d: "Designing pixel-perfect UI tailored to your brand." },
            { t: "Development", d: "Clean, efficient React code built for 2026 standards." },
            { t: "Optimization", d: "Global CDN deployment for light-speed loading." }
          ].map((step, i) => (
            <div key={i} className="process-step">
              <div className="step-num">{i + 1}</div>
              <h3>{step.t}</h3>
              <p style={{opacity: 0.7}}>{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. WHY CHOOSE US CARDS */}
      <section className="section">
        <h2 className="section-title scroll-animate">The Edge We Provide</h2>
        <div className="industry-grid">
          {[
            { t: "Conversion Focus", d: "We design for revenue, not just for looks." },
            { t: "Military Security", d: "AWS-grade protection for all your data assets." },
            { t: "Full Ownership", d: "You own every single line of code, forever." },
            { t: "Lifetime Support", d: "We grow as you grow. 24/7 technical backup." }
          ].map((feat, i) => (
            <div key={i} className="industry-card scroll-animate">
              <h3 style={{marginBottom: '15px'}}>{feat.t}</h3>
              <p style={{opacity: 0.8}}>{feat.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TECH STACK */}
      <section className="section scroll-animate" style={{textAlign: 'center'}}>
        <h2 className="section-title">Powering Innovation With</h2>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          {["React", "Next.js", "TypeScript", "AWS Cloud", "Vercel", "Figma", "Node.js", "Docker"].map((tech, i) => (
            <span key={i} className="tech-pill">{tech}</span>
          ))}
        </div>
      </section>

      {/* 9. PRICING SECTION */}
      <section className="section">
        <h2 className="section-title scroll-animate">Investment Plans</h2>
        <div style={{display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center'}}>
          {[
            { n: "Professional", p: "$199", f: ["5 Pages", "SSL Secure", "SEO Ready"] },
            { n: "Business", p: "$499", f: ["15 Pages", "Payment Setup", "6 Months Support"] },
            { n: "Enterprise", p: "$999", f: ["Unlimited Pages", "Custom CRM", "Priority Support"] }
          ].map((plan, i) => (
            <div key={i} className="industry-card scroll-animate" style={{flex: 1, minWidth: '300px', border: i===1 ? '2px solid var(--accent)' : ''}}>
              <h4 style={{opacity: 0.5}}>{plan.n}</h4>
              <h2 style={{fontSize: '3.5rem', margin: '20px 0'}}>{plan.p}</h2>
              <ul style={{listStyle: 'none', textAlign: 'left', marginBottom: '30px'}}>
                {plan.f.map((f, idx) => <li key={idx} style={{marginBottom: '10px'}}>✦ {f}</li>)}
              </ul>
              <button onClick={handleCallClick} className="cta-btn" style={{width: '100%'}}>Select Plan</button>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FINAL CALL TO ACTION */}
      <section className="section scroll-animate" style={{textAlign: 'center'}}>
        <div className="industry-card" style={{padding: '80px 40px', background: 'rgba(99, 102, 241, 0.1)'}}>
          <h2 style={{fontSize: '3.5rem', marginBottom: '20px'}}>Ready to Dominate?</h2>
          <p style={{marginBottom: '40px', fontSize: '1.2rem'}}>Book your free 15-minute strategy call now.</p>
          <button onClick={handleCallClick} className="cta-btn">LET'S GET STARTED</button>
        </div>
      </section>
    </div>
  );
};

export default WebOffer;