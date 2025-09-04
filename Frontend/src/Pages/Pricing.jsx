import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import WebDevelopmentPricing from "./WebDevelopmentPricing";
import WebDesignPricing from "./WebDesignPricing";
import DigitalMarketingPricing from "./DigitalMarketingPricing";
import "../styles/Pricing.css";

export default function Pricing() {
  const [searchParams] = useSearchParams();
  const defaultService = searchParams.get("service") || "web-development";
  const [activeService, setActiveService] = useState(defaultService);

  useEffect(() => {
    setActiveService(defaultService);
  }, [defaultService]);

  return (
    <div className="pricing-wrapper">
      <h1 className="pricing-title">💲 Pricing Plans</h1>
      <p className="pricing-subtitle">
        Select a service to view detailed pricing plans.
      </p>

      {/* Dropdown */}
      <select
        value={activeService}
        onChange={(e) => setActiveService(e.target.value)}
        className="pricing-dropdown"
      >
        <option value="web-development">Web Development</option>
        <option value="web-design">Web Designing</option>
        <option value="digital-marketing">Digital Marketing</option>
      </select>

      {/* Conditional Pricing Display */}
      <div className="pricing-grid">
        {activeService === "web-development" && <WebDevelopmentPricing />}
        {activeService === "web-design" && <WebDesignPricing />}
        {activeService === "digital-marketing" && <DigitalMarketingPricing />}
      </div>
    </div>
  );
}
