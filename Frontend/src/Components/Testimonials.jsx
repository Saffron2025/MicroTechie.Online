import React from "react";
import { FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import { jumpVariant, fadeLeft, fadeRight } from "../animation.js";
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
      <motion.h2
        className="testimonials-title"
        variants={jumpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        💬 Why People Will Love Working With Us
      </motion.h2>

      <motion.p
        className="testimonials-subtitle"
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        We’re a startup with big ambitions — here’s why joining our journey is a great choice.
      </motion.p>

      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            variants={index % 2 === 0 ? fadeLeft : fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="testimonial-icon">{t.icon}</div>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
