import React from "react";
import '../styles/OurServices.css'
import { Link } from "react-router-dom";

const services = [
  {
    title: "💻 Web Development",
    desc: "Custom websites and web applications built for speed, security, and scalability. From startups to enterprises, we deliver clean, efficient, and high-performing solutions.",
    features: [
      "Custom-built websites",
      "Mobile responsive design",
      "SEO-friendly code",
      "E-commerce integration",
      "Maintenance & support",
    ],
    link: "/web-development",
  },
  {
    title: "🎨 Web Designing",
    desc: "Eye-catching, user-friendly designs that make your brand stand out. We focus on UI/UX to ensure a smooth and engaging user experience.",
    features: [
      "Custom UI/UX design",
      "Figma/Adobe mockups",
      "Responsive layouts",
      "Animation & micro-interactions",
      "Brand-consistent visuals",
    ],
    link: "/web-design",
  },
  {
    title: "📢 Digital Marketing",
    desc: "Results-driven marketing strategies to grow your online presence. We combine SEO, ads, and content to get measurable results.",
    features: [
      "SEO optimization",
      "Social media campaigns",
      "Google & Facebook ads",
      "Email marketing",
      "Content strategy",
    ],
    link: "/digital-marketing",
  },
];

export default function OurServices() {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <h1>🚀 Our Services</h1>
        <p>
          We help startups and businesses grow with powerful websites, engaging
          designs, and result-driven marketing strategies.
        </p>
        <div className="hero-buttons">
          <Link to="/contact" className="btn-primary">
            Get a Quote
          </Link>
          <Link to="/pricing" className="btn-secondary">
            View Pricing
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid">
        {services.map((srv, i) => (
          <div className="service-card" key={i}>
            <h2>{srv.title}</h2>
            <p>{srv.desc}</p>
            <ul>
              {srv.features.map((f, idx) => (
                <li key={idx}>✅ {f}</li>
              ))}
            </ul>
            <Link to={srv.link} className="btn-outline">
              Learn More →
            </Link>
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose Us?</h2>
        <div className="why-grid">
          <div>⚡ Fast Delivery</div>
          <div>🎯 Results-Driven Approach</div>
          <div>📱 100% Mobile Friendly</div>
          <div>🤝 Dedicated Support</div>
        </div>
      </section>

      {/* Our Process */}
      <section className="process">
        <h2>Our Process</h2>
        <div className="steps">
          <div>1️⃣ Consultation & Strategy</div>
          <div>2️⃣ Design & Development</div>
          <div>3️⃣ Testing & Launch</div>
          <div>4️⃣ Ongoing Support</div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="pricing-preview">
        <h2>💲 Starting Prices</h2>
        <p>We offer flexible pricing for every stage of your business.</p>
        <div className="pricing-cards">
          <div>Web Development – from ₹9,999</div>
          <div>Web Designing – from ₹7,999</div>
          <div>Digital Marketing – from ₹5,999/month</div>
        </div>
        <Link to="/pricing" className="btn-primary">
          See Detailed Plans →
        </Link>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <h2>Ready to Grow Your Business?</h2>
        <p>
          Let’s create something amazing together. Contact us today and we’ll
          get back to you within 24 hours.
        </p>
        <Link to="/contact" className="btn-primary">
          Contact Us
        </Link>
      </section>
    </div>
  );
}
