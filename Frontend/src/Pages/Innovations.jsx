import React from "react";
import "../styles/Innovations.css";

const innovations = [
  {
    title: "🌐 All-in-One Website Development",
    status: "Available",
    desc: "We design & build every kind of website — from e-commerce stores, social media platforms, business portals, to creative portfolio sites. Fully responsive, fast, and tailored to your needs.",
  },
  {
    title: "🤝 Freelance & On-Demand Projects",
    status: "Ongoing",
    desc: "Providing freelance web development services for startups, businesses, and individuals — delivering custom solutions with quality and speed.",
  },
  {
    title: "🤖 AI Website Builder",
    status: "In Progress",
    desc: "An AI-powered tool that creates and launches professional websites in minutes with zero coding.",
  },
  {
    title: "🛍 E-commerce Template",
    status: "Coming Soon",
    desc: "A pre-built, high-conversion e-commerce template ready for customization and launch.",
  },
  {
    title: "📱 Social Media Automation Tool",
    status: "Prototype",
    desc: "A smart automation system to schedule, analyze, and optimize social media campaigns effortlessly.",
  }
];

const Innovations = () => {
  return (
    <section className="innovations-section">
      <h2 className="innovations-title">🚀 Innovations, Services & Upcoming Projects</h2>
      <p className="innovations-subtitle">
        From custom websites to cutting-edge tools — we create, innovate, and deliver solutions for every need.
      </p>

      <div className="innovations-grid">
        {innovations.map((item, i) => (
          <div className="innovation-card" key={i}>
            <div className="innovation-header">
              <h3>{item.title}</h3>
              <span className="status">{item.status}</span>
            </div>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Innovations;
