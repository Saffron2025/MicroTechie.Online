import React from "react";
import "../styles/PricingPlans.css";

const plans = [
  {
    name: "Basic",
    price: "$84",
    period: "/one-time",
    features: [
      "Landing page design",
      "Mobile responsive",
      "Basic UI elements",
      "2 revisions",
      "Email support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Creative",
    price: "$180",
    period: "/project",
    features: [
      "Multi-page custom design",
      "Branding & style guide",
      "Interactive animations",
      "5 revisions",
      "Priority support",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Ultimate",
    price: "$360+",
    period: "/project",
    features: [
      "Complete brand identity design",
      "Full UI/UX design for app/website",
      "Illustrations & animations",
      "Unlimited revisions",
      "Dedicated designer",
    ],
    cta: "Get Started",
    highlight: false,
  },
];

export default function WebDesignPricing() {
  return (
    <section className="pricing-section">
      <div className="pricing-head">
        <h2>Web Designing Pricing</h2>
        <p>Beautiful, modern, and user-friendly designs.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((t, i) => (
          <article
            key={t.name}
            className={`plan-card ${t.highlight ? "popular" : ""}`}
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
                <li key={idx}>
                  <span className="tick">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a href="/contact" className="plan-cta">{t.cta}</a>
          </article>
        ))}
      </div>
    </section>
  );
}
