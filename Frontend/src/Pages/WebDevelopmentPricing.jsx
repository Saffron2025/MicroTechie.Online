import React from "react";
import "../styles/PricingPlans.css";

const plans = [
  {
    name: "Basic",
    price: "$120",
    period: "/one-time",
    features: [
      "Single-page website",
      "Mobile responsive",
      "Basic SEO setup",
      "Contact form integration",
      "Email support",
    ],
    cta: "Get Started",
    highlight: false,
    theme: "light",
  },
  {
    name: "Professional",
    price: "$300",
    period: "/project",
    features: [
      "Multi-page website (up to 8)",
      "Advanced SEO + speed optimization",
      "Blog / CMS setup",
      "WhatsApp & lead capture",
      "Priority support",
    ],
    cta: "Get Started",
    highlight: true,
    theme: "dark",
  },
  {
    name: "Premium",
    price: "$600+",
    period: "/project",
    features: [
      "Custom UI/UX + animations",
      "E-commerce / dashboard",
      "Analytics & conversion setup",
      "On-page + technical SEO",
      "Maintenance & SLA",
    ],
    cta: "Get Started",
    highlight: false,
    theme: "light",
  },
];

export default function WebDevelopmentPricing() {
  return (
    <section className="pricing-section">
      <div className="pricing-head">
        <h2>Web Development Pricing</h2>
        <p>Get a fast, secure and scalable website.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((t, i) => (
          <article
            key={t.name}
            className={`plan-card ${t.theme} ${t.highlight ? "popular" : ""}`}
            style={{ animationDelay: `${i * 120}ms` }}
          >
            {t.highlight && <div className="badge">Most Popular</div>}

            <header className="plan-head">
              <h3>{t.name}</h3>
              <div className="price-row">
                <span className="price">{t.price}</span>
                <span className="period">{t.period}</span>
              </div>
            </header>

            <ul className="feature-list">
              {t.features.map((f, idx) => (
                <li key={idx}><span className="tick">✓</span>{f}</li>
              ))}
            </ul>

            <a href="/contact" className="plan-cta">{t.cta}</a>
          </article>
        ))}
      </div>
    </section>
  );
}
