import React from "react";
import "../styles/HomeServicesHighlight.css";

const highlights = [
  { icon: "💻", text: "Web Development" },
  { icon: "🎨", text: "Web Designing" },
  { icon: "📈", text: "Digital Marketing" },
  { icon: "🛠️", text: "Maintenance & SEO" },
  { icon: "📊", text: "Analytics & Reporting" },
  { icon: "🔍", text: "SEO Optimization" },
  { icon: "📱", text: "Mobile App Design" },
  { icon: "🎯", text: "PPC Advertising" },
  { icon: "🖥️", text: "UI/UX Consultancy" },
  { icon: "📢", text: "Social Media Marketing" },
];

const HomeServicesHighlight = () => {
  // Duplicate array to make seamless loop
  const loopItems = [...highlights, ...highlights];

  return (
    <div className="services-highlight-container">
      <div className="services-highlight-marquee">
        {loopItems.map((item, index) => (
          <div className="highlight-item" key={index}>
            <span className="highlight-icon">{item.icon}</span>
            <span className="highlight-text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServicesHighlight;
