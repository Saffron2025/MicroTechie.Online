import React from "react";
import { FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";
import "../styles/Testimonials.css";

const testimonials = [
  {
    icon: <FaRocket />,
    title: "Scalable From Day One",
    text: "Our solutions are built with growth in mind — ready to scale as your business expands."
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation at the Core",
    text: "We combine creativity and technology to deliver impactful, future-ready digital experiences."
  },
  {
    icon: <FaUsers />,
    title: "Driven by People",
    text: "We focus on building long-term relationships and delivering measurable results for our partners."
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-wrapper">
      <h2 className="testimonials-title">💬 Why People Will Love Working With Us</h2>
      <p className="testimonials-subtitle">
        We’re a startup with big ambitions — here’s why joining our journey is a great choice.
      </p>

      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-icon">{t.icon}</div>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
