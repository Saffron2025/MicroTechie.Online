import React from "react";
import "../styles/PricingPlans.css";

const plans = [
  {
    name: "Starter",
    price: "$72",
    period: "/month",
    features: [
      "Social media setup",
      "10 posts/month",
      "Basic ad campaigns",
      "Monthly analytics report",
      "Email support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$180",
    period: "/month",
    features: [
      "Multi-platform campaigns",
      "20 posts/month",
      "SEO optimization",
      "Google & Meta ads",
      "Priority support",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Dominate",
    price: "$360+",
    period: "/month",
    features: [
      "Full digital marketing strategy",
      "Unlimited creative posts",
      "Advanced SEO + backlinks",
      "High-budget ad campaigns",
      "Dedicated account manager",
    ],
    cta: "Get Started",
    highlight: false,
  },
];

export default function DigitalMarketingPricing() {
  return (
    <section className="pricing-section">
      <div className="pricing-head">
        <h2>Digital Marketing Pricing</h2>
        <p>Plans tailored to grow your brand online.</p>
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
