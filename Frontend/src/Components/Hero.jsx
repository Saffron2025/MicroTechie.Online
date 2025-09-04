import React, { useEffect, useRef, useState } from "react";
import "../styles/Hero.css";
import { Link } from "react-router-dom";
import HomeServicesHighlight from "./HomeServicesHighlight";

const Hero = () => {
  const imgRef = useRef(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const videos = [
    "/Micro/WebDevelopment.mp4",
    "/Micro/WebDesigning.mp4",
    "/Micro/DigitalMarketing.mp4"
  ];

  // Auto change video after specific time
  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % videos.length);
    }, 10000); // har 10s me change (apne video length ke hisaab se adjust karo)

    return () => clearInterval(interval);
  }, [videos.length]);

  // Scroll reveal effect
  useEffect(() => {
    const el = imgRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero-section">
        {/* 🔥 Multiple videos stacked with fade effect */}
        <div className="video-wrapper">
          {videos.map((video, i) => (
            <video
              key={i}
              className={`hero-video ${videoIndex === i ? "active" : ""}`}
              src={video}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          ))}
        </div>

        <div className="overlay"></div>

        <div className="hero-content" ref={imgRef}>
          <h1 className="hero-title">
            🚀 Build, Design & Grow <br /> Your Digital Presence
          </h1>
          <p className="hero-subtitle">
            We provide premium <strong>Web Development</strong>,{" "}
            <strong>Web Designing</strong>, and{" "}
            <strong>Digital Marketing</strong> solutions to help your business shine online.
          </p>

          <div className="service-badges">
            <Link to="/web-development">💻 Web Development</Link>
            <Link to="/web-design">🎨 Web Designing</Link>
            <Link to="/digital-marketing">📈 Digital Marketing</Link>
          </div>

          <div className="hero-buttons">
            <Link to="/our-services" className="btn-primary pro-btn">
              🚀 Our Services
            </Link>
            <Link to="/contact" className="btn-secondary pro-btn">
              💬 Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <HomeServicesHighlight />
    </>
  );
};

export default Hero;
